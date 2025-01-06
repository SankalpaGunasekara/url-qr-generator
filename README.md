# URL to QR Code Generator

This Node.js application allows users to input URLs via the command line and generates corresponding QR codes. It also maintains a list of all entered URLs.

## Features

- Interactive command-line interface for URL input
- URL validation
- QR code generation for each valid URL
- Creation of individual text files for each URL
- Maintenance of a master list of all entered URLs
- File name sanitization for compatibility

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system
- npm (Node Package Manager) installed

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:


## Usage

To run the application, use the following command in the project directory:
** first install dependecies : npm i;
** run the generator : node .\index.js

Follow the on-screen prompts to enter your URL. The application will:
1. Validate the URL
2. Generate a QR code image (.png) for the URL
3. Create a text file containing the URL
4. Append the URL to a master list (URL.txt)

## Dependencies

This project uses the following npm packages:
- inquirer: For interactive command line user interfaces
- qr-image: For generating QR code images
- fs: Node.js built-in file system module

## File Structure

- `index.js`: Main application file
- `URL.txt`: Master list of all entered URLs
- `[sanitized_url].txt`: Individual text files for each URL
- `[sanitized_url].png`: QR code images for each URL

## Contributing

Contributions to this project are welcome. Please ensure to update tests as appropriate.
