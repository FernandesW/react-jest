module.exports = {
    roots: ['src'],
    transform: {
        '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['**.test.js'], 
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
        './src/jest.setup.js'
    ]
    
};