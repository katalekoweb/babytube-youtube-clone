export const API_KEY = 'AIzaSyAkJcIm4laHCM6Ltddec2YqwKhcRbFCt7U'

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value/1000000)+"M"
    } else if (value >= 1000) {
        return Math.floor(value/1000)+"K"
    } 

    return value
}