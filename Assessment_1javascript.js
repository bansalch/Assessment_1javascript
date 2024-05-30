/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTBeauty = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , type , model , brand , year ) {
    let NFT = {
        name: name,
        type: type,
        model: model,
        brand: brand,
        year: year,
    }
    NFTBeauty.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTBeauty.length; i++) {
        console.log("\n\n_____________________ MAKEUP PRODUCTS  _________________________\n\n" );
        console.log("Name: " + NFTBeauty[i].name);
        console.log("Type: " + NFTBeauty[i].type);
        console.log("Model: " + NFTBeauty[i].model);
        console.log("Brand: " + NFTBeauty[i].brand);
        console.log("Year: " + NFTBeauty[i].year);
        console.log("\n\n_____________________* * * * *_________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted do Far " + NFTBeauty.length);

}

// call your functions below this line
mintNFT("Shape", "Contour kit", "Shape", "Smashbox", 2015);
mintNFT("Pillowtalk", "Lipstick", "Matte Revolution", "Charlotte Tilbury", 2017);
mintNFT("Brow", "Brow Gel", "Boy Brow", "Glossier", 2015);
mintNFT("Hoola", "Bronzer", "Hoola", "Benefit Cosmetics", 2001);
listNFTs();
getTotalSupply();