# Full Stack Chat App

**Version 1.0.0**

A modern, real-time chat application built with Socket.io and Expo Router for React Native.

## Features

- Real-time messaging with Socket.io
- Modern UI with React Native and Expo Router
- Cross-platform support (iOS & Android)
- Responsive design with NativeWind
- User authentication
- Group chat functionality
- Message history
- Typing indicators
- Online status

## Tech Stack

- **Frontend**: React Native, Expo Router
- **Backend**: Node.js, Express.js
- **Styling**: NativeWind, Tailwind CSS
- **Real-time Communication**: Socket.io
- **Navigation**: Expo Router
- **State Management**: React Hooks
- **Development**: TypeScript, ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install mobile dependencies:
```bash
cd ../mobile
npm install
```

4. Start the backend server:
```bash
cd backend
npm start
```

5. Start the mobile development server:
```bash
cd mobile
npx expo start
```

4. Run on your preferred platform:
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## Project Structure

```
chat-app/
├── backend/               # Backend server
│   ├── controllers/       # API controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── socket/           # Socket.io handlers
│   └── server.js         # Main server file
└── mobile/               # React Native app
    ├── app/              # App screens and navigation
    │   ├── (auth)/       # Authentication screens
    │   └── _layout.tsx   # Root layout
    ├── assets/           # Static assets
    ├── constants/        # App constants
    ├── hooks/           # Custom React hooks
    └── utils/           # Utility functions
```

## Configuration

### Environment Setup

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the mobile directory:

```env
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_SOCKET_URL=http://localhost:3000
```

### Theme Customization

The app uses a centralized theme system located in `constants/theme.ts`. You can customize colors, spacing, and other design tokens there.

## Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint and TypeScript for code quality and type safety. Make sure to follow the established patterns and run linting before committing.

## Building for Production

### Android

```bash
npx expo build:android
```

### iOS

```bash
npx expo build:ios
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue in the repository or contact the development team.

## Acknowledgments

- Socket.io for real-time communication
- Expo team for the amazing development platform
- React Native community for continuous improvements