import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fab, fas, far);

import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    icon: string;
}

export const Icon: React.FC<IconProps> = ({ icon, className }) => {
    return (
        <FontAwesomeIcon
            className={cn(className)}
            // @ts-expect-error for reasons
            icon={icon}
        />
    );
};