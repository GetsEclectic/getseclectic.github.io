function submitForm() {
    const password = document.getElementById('password').value;

    //var address = "123 N. Fake Street";
    //var blob = CryptoJS.AES.encrypt(address, password).toString()

    var blob = "U2FsdGVkX1+MwKfEu2qyStgEpIknW/u8uxGTlN6/XdDZf1AsyYRbCma8LuTrWwXl";
    const decrypted = CryptoJS.AES.decrypt(blob, password).toString(CryptoJS.enc.Utf8);

    const res = decrypted || 'password incorrect.';
    document.getElementById('display').innerHTML = res
    document.getElementById('passwordForm').style.display = "none";
}
document.getElementById('formBtn').addEventListener('click', submitForm);