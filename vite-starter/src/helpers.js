export function kebabCaseToTitleCase(colorName){
    const colorWithSpace = colorName.replaceAll("-"," ");
    const colorWithCaps = colorWithSpace.replaceAll(/\b[a-z]/g,match => match.toUpperCase());
    
    return colorWithCaps;
}