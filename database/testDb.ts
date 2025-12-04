import dotenv from "dotenv";
import { connectToDatabase } from "./mongoose";

// Load environment variables
dotenv.config();

async function main() {
  try {
    await connectToDatabase();
    console.log("✅ Ok connected");
    process.exit(0);
  } catch (err) {
    console.error("❌ error");
    console.error(err);
    process.exit(1);
  }
}
main();