# Stock Market App

A real-time stock market web app built with Next.js, TypeScript, MongoDB, Better Auth, and Inngest. It includes live stock prices, search, personalized alerts, interactive charts, AI-generated insights, daily market news summaries, and watchlists. Designed to feel smooth, fast, and modern while keeping the codebase clean and scalable.

🔗 **[Live Demo](https://lumina-stock.vercel.app/)**

## Features

- **Real-time stock data** – Live price updates and market information
- **Search with instant results** – Quick stock symbol and company search
- **Watchlists and user accounts** – Track your favorite stocks
- **Daily AI-powered news summary emails** – Stay informed with automated summaries
- **Automated background jobs** – Powered by Inngest for reliable task execution
- **Authentication** – Secure user management with Better Auth
- **MongoDB storage** – Efficient data management with Mongoose
- **Fully responsive UI** – Built with Tailwind CSS and shadcn components

## Tech Stack

- **Next.js 16** – React framework for production
- **TypeScript** – Type-safe development
- **MongoDB & Mongoose** – Database and ODM
- **Better Auth** – Authentication solution
- **Inngest** – Background job orchestration
- **Tailwind CSS** – Utility-first styling
- **Nodemailer** – Email delivery
- **Gemini API** – AI-powered content summaries
- **Finnhub API** – Stock market data

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB instance
- API keys for Finnhub and Gemini

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/riizzn/stock-market.git
   cd stock-market
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root and add the following:
   
   ```env
   NODE_ENV="development"
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Authentication
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   
   # AI & APIs
   GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key
   
   # Email
   NODEMAILER_EMAIL=your_email@example.com
   NODEMAILER_PASSWORD=your_app_password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Environment mode (development/production) |
| `NEXT_PUBLIC_BASE_URL` | Base URL of your application |
| `MONGODB_URI` | MongoDB connection string |
| `BETTER_AUTH_SECRET` | Secret key for Better Auth |
| `BETTER_AUTH_URL` | Better Auth callback URL |
| `GEMINI_API_KEY` | Gemini API key for AI summaries |
| `NODEMAILER_EMAIL` | Email address for sending notifications |
| `NODEMAILER_PASSWORD` | Email app password |
| `NEXT_PUBLIC_FINNHUB_API_KEY` | Finnhub API key for stock data |

## License

MIT license

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made by [riizzn](https://github.com/riizzn)** | [Live Demo](https://lumina-stock.vercel.app/)
