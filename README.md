# Introduction
Please view README.md in each sub-folder for more information.

Below are some general guideline which could be applied for all sub-folder:

# Build application
Run following to install all required dependencies:
```
npm install
```

# Start application
Then run following to start development server:
```
npm start
```

# Clean `node_modules` folder
Use `./fastclean_target.sh` (Linux) or `fastclean_target.bat` (Windows)

# Upgrade dependencies
Upgrade minor version: `./upgrade-minor.sh`
Upgrade major version: `./upgrade-major.sh`

# Troubleshooting
- https://stackoverflow.com/questions/42308879/how-to-solve-npm-error-npm-err-code-elifecycle
  `npm cache clean --force` (or `npm cache verify`
  delete `node_modules` folder
  delete `package-lock.json` file
  `npm install`
