import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo: React.FC<{timestamp: string}> = ({timestamp}: {timestamp: string}) => {
    let timeAgo = '';
    if(timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago` 
    }
    return (
        <span>
            &nbsp;<i>{timeAgo}</i>
        </span>
    );
}

export default TimeAgo