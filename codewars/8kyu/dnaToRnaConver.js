function DNAtoRNA(dna) {
    // dna to DNA
    let DNA = dna.toUpperCase();
    // separating into single elements
    // DNA into Array
    let DNAS = DNA.split('');
    // to translate DNA to RNA
    for (i = 0; i < DNAS.length; i++) {
        //looping through the array and replace t's with u's
        if (DNAS[i] === "T") {
            DNAS[i] = "U";
        }
    }
    let RNA = DNAS.join('');
    return RNA
}