# Visual Font Size Guide
The purpose of this tool is to illustrate how font/type faces at various sizes, styles and weights looking on screen.

## ADD LOCAL FONT FILES:

1. Add font faces to _fonts/
2. Open `_css/font.css`  then add new font css entries.
3. Open `_data/typefaces.json` then add new font names to the "typefaces" object.

## ADD REMOTE FONTS 
1. Open `index.html` and add link or script tag to the remote font CSS or Javascript file.
2. Open `_data/typefaces.json` then add new font names to the "typefaces" object.

## REMOVING FONTS:
1. Delete the relevant files in the `_fonts/` directory.
2. Open the `_css/font.css` then remove the relevant entries.
3. pen `_data/typefaces.json` file then remove the relevent font names from the "typefaces" object.

## ADDING/UPDATING FONT SIZES:
1. Open `_data/typefaces.json` then add/remove values in the "typesizes" object.
