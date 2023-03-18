
const getImageBtn=document.getElementById('getImageBtn');
const nextBtn = document.getElementById('nextBtn');
const dogImage=document.getElementById('dog-img');
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

function changeBreed()
{    
    dogBreed.forEach(breed=>{
        let option=document.createElement("option");
        option.innerHTML=breed;
        option.value=breed;
        select.append(option);
    });
}

async function fetchDogByBreed(url)
{
    const response=await fetch(url);
    // console.log(response);
    const dogDetails=await response.json();
    // console.log(dogDetails);
    return dogDetails;
}
getImageBtn.addEventListener('click',()=>{
    let breedName=select.value;
    var url=`https://dog.ceo/api/breed/${breedName}/images/random`;
    var dogDetails=fetchDogByBreed(url);
    var html="";
    dogDetails.then(data=>{
        if(data.message)
        {   
            console.log(data.message);
            html+=`
                <img src="${data.message}" alt="">
                `;
                dogImage.innerHTML=html;
        }
        else
        {
            alert("NotFound, Please Select Right Option");
        }
    })
});

// same Breed Image
{

}