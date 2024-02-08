export function phoneNumber (number) {
    if (number <= 12 || number >= 14) {
        throw new Error(`raqamingiz hato qaytadan kiriting`)
    }
    return number == 13;
}
try {
    console.log(phoneNumber(+prompt(`telefon raqamingizni kiritng +998..........`)));
} catch (error) {
    console.log(`raqamingizda hatolik bor qaytadan kirintg`);
}