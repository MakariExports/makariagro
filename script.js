window.onload = function () {

    const companyName =
        document.getElementById("company-name");

    if (companyName) {
        companyName.innerText = COMPANY.name;
    }

    const footerCompany =
        document.getElementById("footer-company-name");

    if (footerCompany) {
        footerCompany.innerText = COMPANY.name;
    }

    const footerTagline =
        document.getElementById("footer-tagline");

    if (footerTagline) {
        footerTagline.innerText = COMPANY.tagline;
    }

};