// Default bots (can be overridden by localStorage)
if (!window.defaultBots) {
    window.defaultBots = [
        {
        name: "Main Bot (Example)",
        token: "123456789:YOUR_MAIN_BOT_TOKEN_HERE",
        chat_id: "YOUR_MAIN_CHAT_ID_HERE"
        },
        {
        name: "Support Bot (Example)",
        token: "987654321:YOUR_SUPPORT_BOT_TOKEN_HERE",
        chat_id: "YOUR_SUPPORT_CHAT_ID_HERE"
        }
    ];
}
