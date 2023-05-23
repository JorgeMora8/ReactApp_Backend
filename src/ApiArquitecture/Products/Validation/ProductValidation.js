export function validateName(name){ 
    if(!name) throw new Error("NAME MISSING")
    
    return name
}

export function validatePrice(price){ 
    if(!price) throw new Error("PRICE MISSING")
    if(price <= 0) throw new Error("CANT SAVE PRODUCT PRICE ON 0$")
    
    return price
}

export function validateCategory(category){ 
    if(!category) throw new Error("CATEGORY MISSING")

    return category
}

export function validateUnits(units){ 
    if(!units) throw new Error("PRODUCT UNITS MISSING")
    if(units <= 0) throw new Error("CANT SAVE PRODUCT UNITS ON 0")

    return units
}

export function validateBrand(brand){ 
    if(!brand) throw new Error("PRODUCT BRAND MISSING")

    return brand
}

export function validateImage(image){ 
    if(!image) throw new Error("PRODUCT IMAGE MISSING")

    return image
}


export function validateDescription(description){ 
    if(!description) throw new Error("PRODUCT DESCRIPTION MISSING")
    if(description.length <= 5) throw new Error("PRODUCT DESCRIPTION SHORT")

    return description
}
