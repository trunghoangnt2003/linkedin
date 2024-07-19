// src/App.tsx (or index.tsx)
import React from "react";
import PostDetail from "./pages/detailPost/mainContent/mainContent";
import MyForm from "./utils/test";

const App: React.FC = () => {
    return (
        // <ThemeProvider>
        //     <NotificationProvider>
        //         <div className="App">
        //             <NotificationList />
        //             {/* Other components consuming notifications or theme */}
        //         </div>
        //     </NotificationProvider>
        // </ThemeProvider>
        <>
            <MyForm />
        </>
    );
};

export default App;
