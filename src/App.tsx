// src/App.tsx (or index.tsx)
import React from "react";
import { NotificationProvider, ThemeProvider } from "./contexts";
import { NotificationList } from "./pages";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <NotificationProvider>
                <div className="App">
                    <NotificationList />
                    {/* Other components consuming notifications or theme */}
                </div>
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
