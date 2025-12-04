// --- JavaScript Section ---

let safhe = document.getElementById("safhe_namayesh");

// Write numbers to screen
function neveshtan(adad) {
    safhe.value += adad;
}

// Add operators (+ - * /)
function ezafe_amal(amal) {
    safhe.value += " " + amal + " ";
}

// Clear screen (C)
function pak_kardan() {
    safhe.value = "";
}

// Calculate result (=)
function mohasebe() {
    try {
        // Replace ^ with ** for JS power calculation
        let khoroji = safhe.value.replace("^", "**");
        
        // Eval is easy for students to use
        let javab = eval(khoroji); 
        safhe.value = javab;
    } catch (error) {
        alert("Khata: Ebart riazi eshtebah ast!");
        pak_kardan();
    }
}

// Advanced math operations
function amaliat_riazi(no_amal) {
    let adad = parseFloat(safhe.value);
    
    if (isNaN(adad)) {
        alert("Lotfan avval yek adad vared konid!");
        return;
    }

    let natije = 0;

    if (no_amal === 'sin') {
        // Convert degree to radian
        natije = Math.sin(adad * Math.PI / 180);
    } 
    else if (no_amal === 'cos') {
        natije = Math.cos(adad * Math.PI / 180);
    } 
    else if (no_amal === 'tan') {
        natije = Math.tan(adad * Math.PI / 180);
    } 
    else if (no_amal === 'log') {
        natije = Math.log10(adad);
    } 
    else if (no_amal === 'jazr') {
        if(adad < 0) { alert("Adad manfi jazr nadarad!"); return; }
        natije = Math.sqrt(adad);
    }
    else if (no_amal === 'tavan') {
        safhe.value += " ^ ";
        return; 
    }

    // Show result with max 4 decimals
    safhe.value = natije.toFixed(4);
}

// Base Conversion Logic
function anjam_tabdil_mabna() {
    let adad_vorodi = document.getElementById("mabna_input").value;
    let az_mabna = parseInt(document.getElementById("mabna_az").value);
    let be_mabna = parseInt(document.getElementById("mabna_be").value);

    try {
        // Step 1: Convert to Decimal (Base 10)
        let adad_dehdi = parseInt(adad_vorodi, az_mabna);
        
        if (isNaN(adad_dehdi)) {
            document.getElementById("natije_mabna").innerHTML = "Khata: Adad ba mabna nemikhanad!";
            return;
        }

        // Step 2: Convert from Decimal to Target Base
        let javab_nahaee = adad_dehdi.toString(be_mabna).toUpperCase();

        document.getElementById("natije_mabna").innerHTML = "Natije: " + javab_nahaee;
    } catch (e) {
        document.getElementById("natije_mabna").innerHTML = "Khata dar mohasebe";
    }
}