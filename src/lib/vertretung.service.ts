import axios from "axios";
import * as cheerio from "cheerio";
import * as iconv from "iconv-lite";
import { unstable_cache } from "next/cache";
import { todayurl, tomorrowurl } from "./representation.data";
export interface Vertretungseintrag {
  stunde: string;
  klasse: string;
  fach: string;
  vertretung: string;
  raum: string;
  bemerkung: string;
}

export async function fetchRepresentation(): Promise<{
  today: { entries: Vertretungseintrag[]; informations: string[] };
  tomorrow: { entries: Vertretungseintrag[]; informations: string[] };
  stand: string;
}> {
  const urls = {
    today: todayurl,
    tomorrow: tomorrowurl,
  };

  const fetchEntries = async (
    url: string
  ): Promise<{
    entries: Vertretungseintrag[];
    stand: string;
    informations: string[];
  }> => {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const decodedData = iconv.decode(
      Buffer.from(response.data as ArrayBuffer),
      "latin1"
    );
    const $ = cheerio.load(decodedData);

    const entries: Vertretungseintrag[] = [];
    $("table tbody tr").each((_, element) => {
      const tds = $(element).find("td");
      if (tds.length >= 6) {
        entries.push({
          stunde: $(tds[0]).text().trim(),
          klasse: $(tds[1]).text().trim(),
          fach: $(tds[2]).text().trim(),
          vertretung: $(tds[3]).text().trim(),
          raum: $(tds[4]).text().trim(),
          bemerkung: $(tds[5]).text().trim(),
        });
      }
    });

    const stand = $("p.Stand").text().trim() || "";
    const informationsHtml = $("p.Mitteilungen").html() || "";
    const informations = informationsHtml
      .split(/<br\s*\/?>/i)
      .map((info) => cheerio.load(info)("body").text().trim())
      .filter((info) => info.length > 0);

    return { entries, stand, informations };
  };

  const [todayData, tomorrowData] = await Promise.all([
    fetchEntries(urls.today),
    fetchEntries(urls.tomorrow),
  ]);

  return {
    today: { entries: todayData.entries, informations: todayData.informations },
    tomorrow: {
      entries: tomorrowData.entries,
      informations: tomorrowData.informations,
    },
    stand: todayData.stand,
  };
}

export const getCachedRepresentation = unstable_cache(
  async () => {
    const data = await fetchRepresentation();
    return data;
  },
  ["vertretungsplan"],
  {
    revalidate: 60, // Alle 60 Sekunden neu fetchen
  }
);
