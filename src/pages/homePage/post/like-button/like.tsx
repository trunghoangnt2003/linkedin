import { Button } from "@mui/material";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export function LikeButton() {
    const [showReactions, setShowReactions] = useState(false);
    const [selectedReaction, setSelectedReaction] = useState(null);

    const reactions = [
        { icon: "👍", value: "👍" },
        { icon: "👎", value: "👎" },
        { icon: "❤️", value: "❤️" },
    ];

    const handleReactionClick = (reaction) => {
        setSelectedReaction(reaction.value);
        setShowReactions(false);
    };

    return (
        <div
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
            style={{ position: "relative", display: "inline-block" }}
        >
            <Tooltip
                title={
                    <div
                        onMouseEnter={() => setShowReactions(true)}
                        onMouseLeave={() => setShowReactions(false)}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        {reactions.map((reaction) => (
                            <Button
                                key={reaction.value}
                                onClick={() => handleReactionClick(reaction)}
                            >
                                {reaction.icon}
                            </Button>
                        ))}
                    </div>
                }
                open={showReactions}
                placement="top"
            >
                <div style={{ cursor: "pointer" }}>
                    {selectedReaction || "👍"}
                </div>
            </Tooltip>
        </div>
    );
}
