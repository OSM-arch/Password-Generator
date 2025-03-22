function GeneratePassword()
{
    const Passwordlength = document.getElementById("Passwordlength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercaseChars = "azertyuiopqsdfghjklmwxcvbn";
    const uppercaseChars = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const numbersChars = "0123456789";
    const symbolsChars = "&é(-è_çà)=,;:!$ù%@/|[]{}#~§?£µ";

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : ""; 
    allowedChars += includeNumbers ? numbersChars : ""; 
    allowedChars += includeSymbols ? symbolsChars : "";
    
    if (allowedChars == "") alert("You must check at least 1 option!!");

    for (let i = 0; i < Passwordlength; i++)
    {
        let index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[index];
    }
    document.getElementById("GeneratedPassword").textContent = `Generated Password: ${password}`;
}