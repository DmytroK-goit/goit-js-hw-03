function slugify(title) { 
    let slug = String(title.split(" "))
    // console.log(slug);
    let lowerSlug = slug.toLowerCase();
    // console.log(lowerSlug);
    let array = lowerSlug.split(",")
    // console.log(array);
    let newTitle = array.join("-")
    return newTitle;
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
