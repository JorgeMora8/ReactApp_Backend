import { validateBrand, 
         validateCategory, 
         validateDescription, 
         validateImage, 
         validateName, 
         validatePrice, 
         validateUnits } from "./Validation/ProductValidation.js";

export class Product { 

    //PRIVATE DATA
    #id
    #name
    #price
    #category
    #brand
    #units
    #image
    #description
    
    constructor({name, price, image, category, brand, units, id, description}){ 
        this.#id = id
        this.#name = validateName(name); 
        this.#price= validatePrice(price); 
        this.#image= validateImage(image); 
        this.#category = validateCategory(category); 
        this.#brand = validateBrand(brand)
        this.#units = validateUnits(units)
        this.#description = validateDescription(description)
    }

    //ENCAPTULATION
    asDTO(){ 
        return Object.freeze({ 
            id:this.#id,
            name:this.#name, 
            price:this.#price, 
            image:this.#image, 
            category:this.#category, 
            brand:this.#brand, 
            units:this.#units, 
            description:this.#description
        })
    }
}