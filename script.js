
const getImageBtn=document.getElementById('getImageBtn');
const nextBtn = document.getElementById('nextBtn');
const dogImage=document.getElementById('dog-img');
let breedName="";

// dog Breed array
var dogBreed = ["affenpinscher","african","airedale","akita","appenzeller",
                "australian","basenji","beagle","bluetick","borzoi",
                "bouvier","boxer","brabancon","briard","buhund","bulldog",
                "bullterrier","cattledog","chihuahua","chow","clumber",
                "cockapoo","collie","coonhound","corgi","cotondetulear",
                "dachshund","dalmatian","dane","deerhound","dhole","dingo",
                "doberman","elkhound","entlebucher","eskimo","finnish",
                "frise","germanshepherd","greyhound","groenendael",
                "havanese","hound","husky","keeshond","kelpie","komondor",
                "kuvasz","labradoodle","labrador","leonberg","lhasa",
                "malamute","malinois","maltese","mastiff","mexicanhairless",
                "mix","mountain","newfoundland","otterhound","ovcharka",
                "papillon","pekinese","pembroke","pinscher","pitbull","pointer",
                "pomeranian","poodle","pug","puggle","pyrenees","redbone",
                "retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer",
                "segugio","setter","sharpei","sheepdog","shiba","shihtzu",
                "spaniel","spitz","springer","stbernard","terrier","tervuren",
                "vizsla","waterdog","weimaraner","whippet","wolfhound",];

let select=document.getElementById('dog-breed');
select.addEventListener('change', changeBreed());

// select breed from option tag
function changeBreed()
{    
    dogBreed.forEach(breed=>{
        let option=document.createElement("option");
        option.innerHTML=breed;
        option.value=breed;
        select.append(option);
    });
}

// fetches image form dog api 
async function fetchDogByBreed(url)
{
    const response=await fetch(url);
    const dogDetails=await response.json();
    return dogDetails;
}
getImageBtn.addEventListener('click',()=>{
    breedName=select.value;
    var url=`https://dog.ceo/api/breed/${breedName}/images/random`;
    
    // calling async function
    var dogDetails=fetchDogByBreed(url);
    var html="";
    dogDetails.then(data=>{
        if(data.message)
        {   
            html+=`
                <img src="${data.message}" alt="">
                `;
                dogImage.innerHTML=html;
        }
        else
        {
            alert("NotFound, Please Select Right Option");
        }
    });
});

// same Breed next Image
nextBtn.addEventListener('click',()=>{
    var url=`https://dog.ceo/api/breed/${breedName}/images/random`;
    
    // calling async function for same breed
    var dogDetails=fetchDogByBreed(url);
    var html="";
    dogDetails.then(data=>{
        if(data.message)
        {   
            html+=`
                <img src="${data.message}" alt="">
                `;
                dogImage.innerHTML=html;
        }
        else
        {
            alert("NotFound");
        }
    });
});