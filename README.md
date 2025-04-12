# Admin Tool Dashboard

A modern, responsive admin dashboard built with React, Material-UI, and Nivo charts. This dashboard provides a comprehensive interface for managing and visualizing data.

## Features

- 📊 Interactive data visualization with Nivo charts
- 🎨 Customizable theme with dark/light mode support
- 📱 Fully responsive design
- 📈 Real-time data updates
- 🔍 Advanced filtering and search capabilities
- 🔐 Secure authentication system

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd admin-tool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Mock data and API integration
├── pages/         # Page components
├── theme/         # Theme configuration
└── App.jsx        # Main application component
```

## Dependencies

- React 18
- Material-UI
- Nivo Charts
- React Router
- Axios

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_URL=your_api_url
REACT_APP_API_KEY=your_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
