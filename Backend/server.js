import app from "../Backend/app.js"

// Dotenv configuration
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local' })

const PORT = process.env.PORT || 3000
// console.log(PORT);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is runing on PORT: ${PORT}`);
})