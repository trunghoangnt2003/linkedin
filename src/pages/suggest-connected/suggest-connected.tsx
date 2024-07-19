import clsx from "clsx";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import { HeaderPost } from "../homePage/post/header-post/header-post";

const users = [
    {
        name: "pooja devi",
        title: "General Manager",
        avatar: "https://example.com/pooja_devi.jpg",
    },
    {
        name: "Anup Somani",
        title: "MANAGING DIRECTOR",
        avatar: "https://example.com/anup_somani.jpg",
    },
    {
        name: "Krishnaa Visana",
        title: "SSSM",
        avatar: "https://example.com/krishnaa_visana.jpg",
    },
    {
        name: "Naman Bansal",
        title: "CEO @ Duelance",
        avatar: "https://example.com/naman_bansal.jpg",
    },
    {
        name: "satyavir satyavir",
        title: "General Manager",
        avatar: "https://example.com/satyavir_satyavir.jpg",
    },
    {
        name: "amit rao",
        title: "General Manager",
        avatar: "https://example.com/amit_rao.jpg",
    },
];

export const SuggestConnected: React.FC = () => {
    return (
        <div className="bg-black text-white">
            <div className="px-4 py-8">
                <HeaderPost />
                <Typography variant="h6" gutterBottom>
                    People you may know
                </Typography>
                {users.map((user, index) => (
                    <Card key={index} className="mb-4">
                        <CardContent
                            sx={{ backgroundColor: "#1D2226", color: "white" }}
                        >
                            <Box display="flex" alignItems="center">
                                <Avatar src={user.avatar} sx={{ mr: 2 }} />
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        // color="textSecondary"
                                        fontSize={12}
                                        fontWeight={"100"}
                                    >
                                        {user.title}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        mr: 1,
                                        color: "black",
                                        borderRadius: "50px",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                    }}
                                >
                                    Connect
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        mr: 1,
                                        color: "white",
                                        borderRadius: "50px",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                        border: "1px solid white",
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
