import React from "react";
import "./header.css";

export default ( props ) => {

    if( props.logado && props.atendente !== "true" ){
        return(
            <nav className="navbar navbar navbar-fixed navbar-bgcolor">

                <div className="container-fluid navbar-bgcolor">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/" >
                            <img id="img_logo" alt="logo" src="data:image/png;base64,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" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav"> 
                            <li role="presentation" className="active nav-li"> 
                                <a href="/"> Home </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/minhas-fotos"> Minhas Fotos </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/solicitar-orcamento"> Solicitar Orçamento </a>
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/agendamento"> Marcar Horario </a>
                            </li>

                            <li role="presentation" className="active nav-li">
                                <a href="/loja"> Loja </a>
                            </li> 

                            <li role="presentation" className="active nav-li">
                                <a href="/carrinho"> Carrinho </a>
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/perfil"> Perfil </a>     
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/sobre"> Sobre Nós </a>
                            </li> 

                            <li role="presentation" className="active nav-li">
                                <a href="/logout"> Sair </a>
                            </li> 

                        </ul>

                        <form className="navbar-form navbar-right" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Procurar" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Pesquisar</button>
                                </span>
                            </div>
            
                        </form>
                    </div>                
                </div>        
            </nav>
        )
    } else if( props.logado && props.atendente === "true" ){
        return(
            <nav className="navbar navbar navbar-fixed navbar-bgcolor">

                <div className="container-fluid navbar-bgcolor">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/" >
                            <img id="img_logo" alt="logo" src="data:image/png;base64,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" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav"> 
                            <li role="presentation" className="active nav-li"> 
                                <a href="/"> Home </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/minhas-fotos"> Minhas Fotos </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/orcamentos"> Responder Orçamento </a>
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/painel-agendamento"> Painel Agendamento </a>
                            </li>

                            <li role="presentation" className="active nav-li">
                                <a href="/loja"> Loja </a>
                            </li> 

                            <li role="presentation" className="active nav-li">
                                <a href="/carrinho"> Carrinho </a>
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/perfil"> Perfil </a>     
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/sobre"> Sobre Nós </a>
                            </li> 

                            <li role="presentation" className="active nav-li">
                                <a href="/logout"> Sair </a>
                            </li> 

                        </ul>

                        <form className="navbar-form navbar-right" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Procurar" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Pesquisar</button>
                                </span>
                            </div>
            
                        </form>
                    </div>                
                </div>        
            </nav>
        )

    } else {
        return (
            <nav className="navbar navbar navbar-fixed navbar-bgcolor">
    
                <div className="container-fluid navbar-bgcolor">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/" >
                            <img id="img_logo" alt="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUAAAD////8/Pz5+fn19fXq6urt7e3z8/Pi4uLw8PDo6Oiurq7Z2dm6urrh4eHe3t6np6dJSUnIyMigoKDS0tKNjY2+vr6FhYXPz8/CwsIsLCyysrJZWVmamppra2s9PT15eXkaGhpvb282NjYoKCgSEhJhYWFCQkKSkpJPT093d3dAQEAjIyOIiIgXFxcODg6HclwnAAAZZ0lEQVR4nO2dh5aqTBKAaXJqck4iOAiOOu//dlsNGGaMKMjdPVu75597dGT47OqK3Q2F/teFmvsGJpf/E44hrGbFtpsXibkooygqF2ZS5K4dWxr7gb8+KSGt4zQrqXtSZinW6SlvYjJCXcnvs/3izBV9qhuZhFC1k6fhTpLY6hQ3Mzohi7MX6A6S4dGn5riEvGG+gdeJafCj3tOIhIzyPl4PqTDj3dZohNY7ynkpmTXWjY1DyNhfo/IR+bLHGcgxCMV8dLxOcnGEu3uf0HnFMzwriTM7oTOWdbkl5ruM7xGqU/O1jO8FAu8QytUH+IhU8iyEjP8hPiL+63b1ZULlg3xElA8T6s/nDWNJ+WL28Rrh7uN8RHYfI3SWswBS1PIVz/EC4SctzF/xP0Aor2YEpKjVYMcxlPDTJvRShhrVgYTjpkivSTYhITeXifktS24qQmtutKMMSY8HEKZzc51JOgVhMTfVLynGJ/xEnjREzJEJ2ehw5WieiO1Soicrq88RSsdCU0Yj7h/R1y9pPEL5eNUY8kJI7ZsZwc7kqfjmGULxcMVSBECG0V23XFh/R3LKgtQteaYW9wThEdBHNM3QtFolPgny3fO/ldKzuJMnEB8THlU0QoRPYKvG6N45hXBuNyXcq3cxqTxW1IeE0ulqFYsYmg0XPrFigBr3r+ckiqJBpKs3Ma08NDePCNlf5fqUQYy9VBCopMQLXPta1VUXGIbl2U8V387k65HTeEQY/b7eXkGu2TalGV5CJdiXgIwf6C8ji6o+AyFMnrcILyOZ71RlWNBIhuPZXeQR7WRZRpJVVQ3x+P2ZJ+RBdHOf8JpvLxALHgPRHC9zEitJgsDynO4EVpzOFNndj1HvEl4z/180z3O8xCD4wakiJ0iCrHtWqNQnFd1+uJRzN9O4R3g1HwwEUEidk2hBlmVVk3k5wDE2zvj2Bv3pTPJevniHkLt2rR2SVU+JLY5lRA4IdcdT492u+jn9isZpH4/q7mT9dwivlixSmgsMN7dDkeVkUXTCNLcY/fxXfcEJP8R1kuUrhNeLTiWSLU+x/TrgZVETsVKsc09kzkpwghPM4DRul6duEt4qG/KcGoSxkRsar+m64RdRtPM0hj9QxWIwSz3nZpHxFqF440JNSLOiqlqpb/GiruE2IvBVWUBe26xZM5a1+RjWudwKwm8R3qps17YrOpLo4DyWNdUJuleXNvGO8ZaiwPLENz46sayGEd50aBntKzLirHhn6CSOOXTZSizzEpv7sqfMVQK40dO4TujcvMxSTDEtQADj27quqsHpq8h0hitY8Iz7T+Bck+udqeuEd2rbrulVrIVrN9Y5x3HODZKbWtjezRF9d7J8nvBeOQ0iltQzFANbsgTz8JfdTORdns1Y+b/aQr1GqN+/jsOrnKg6usxqgRWchy+iWzSLSRkeyLVG+DXCBz36ELJBieMge+IcyzqzSTuv+o7ILMxYPCnITSmfI3zUIixIQYoRICtkgjA0Tm/IZrQEh0FtWRrN4xOv+f1LQubhZUhSzwiIoWkYw1PWG+arn/0PtUx0GOS5ZuPluptLwse5nYpQQO1TGCnNwuGhTmoGy58f0NHYhbeduRpVl07xglB+fBVIOBfU16pBiA9D7/CNqOae+iERnMGJsUrPUSAmclFevCB8wp2ZCMF0W1M1oq0Q99N2p5AUsQpxCulV4Cg/dy8xnVSPCNVnrsKi9SLL9pSAAoy74PtHj2BCukhXMA4MfbedluOO/F3J+JfwqWKSh3CeVRFlIzHEcZtIxjlMwTVCnI5ju1ZmXLLxt/T2h/B2QHouG6QDoUktEOthpYZXymD109WfeSt1i61CpmHijrZ6f4g4dwmfvCPE5JsqIUgwD4lHxMm+rwfFrk/+HXS18MeuZ3wx7xE+N4QUpaE6r6othDcOjuMFVaVR25pCyPI3JCRaZqzE0iyY5hkco3OH8FkTbyNvk1UllSMR1HTzUzdfMAkBUPQrglRuLI6FfJGmER89vNrYktwmvFW6uHINcUMmYokY7ClGUq0g7AZAJieB+FdpQ27Mc5xEIowHcfwUIt4kzJ++BkvnBZmIHLJATSNQzFhiWFSTzGJbWapqBSrNQlwHVzUeXm1syW8RDjALIbKBcElhpAJhRTJ8jqEVopFrkvxbjqNytMQyRHU/H94wNwjt5y+xQyEY0xKsC4+xklNm7IisQ8pXmcPLKvDJHAfTEGJXmIqTkdwS+wbhgN7YF5KB8BsmJA2E9rayLZUjRrQWaE5TRZmTOF5CTKenH88Wv64TDirkyijPkob8DHBsLNapp5HYBoOuSzyYGIkHRAH4WoX5+KJN6yrhoNuwkQ2ESypGOvj8YuvjHbgJg/TzITNmGQEwJZ6lBXrgDB9HsmuEw+4iQVZWNRFcSgLC3c+mjvaQbJDrkFGjGUGQeJ6jaYYljMFEJDeFuUI4MFim+Sxr1qQyAlqabpPv1X7VsiHU1QAklhcEjmZgLqLP719QrhAODJIt5GcJfAYyqNgwzKhcUjuBNPhbQpqhWRhEGVwISxDpR+WtscW8JBxq0n1kAOFPIyNRMexi+72ifFE4KgdNCDmZk3nESgT7ar91QuEvCIdGHksUFJW5zX3EKIrtLkrInmLupP4wAVkJGHmGkVpF/XDKaFwQDs7kOGFTNSWpGngGTER45aeQzwARzXIcJ2saeI4W8bPlfvMvITv4EgbagalZrnkUGGm6pn4WlRmctBT+z8JElHVRZngSviHms6Ub9g/h8LDDR0qWfJuRhTjbTottUlTNjj07xINhBRYIdVXnRA6i8A+7DPyHcGjUsdj5SK2SdRO5iDbsdFdtSD7lMUdE8Bgs33ZRVUsHa0p/eMdU9odw4Mddzy9EBkzNwlzQKE5Td7MpNkVRaWdjSMMYik5geTIJUImiftRl/CZ8qoh4EsXx6kxAflUuE8pBARDmm03uupv8tFQQnKLEa46FJULLMAJC2jQs10X9RTggcQIpJC82ghAZZVkuzBBxQOhnGxd+ZGe9EeISNSdsV/OQRJEZ+nfeE/sX4cAkFVuGYVCSmEH0vdnBjQNhku1sw95V6snY0AInOk4/nnQbsX5wtVTyi3Dop7FdLCgP+TAPG4hyce3umsQ3YiX1N/wBEeIaSVbD1kkCIcxLBn1yGfE54dBqUbnz82qdo6CpkqZhkerWfrXe2B5W0vzQayYuUeK0wODJEluyDFVg2U9mw/oZ4cCIqkGKCwnwGsIZ01w3NBJc199Eme2F2KgLfPL7DK9ait2pqcCwEiec/FLNwT8NZrpoTjkjzId9FOxl7G+qBbiGoCoJgF37fpSkYRhi280c5kgIaorrGIwOeAtekkiY2oU27fL30ATzM1mrMT8jHOanQvIRKy8apbOSIJ7r+9+mi4MAhizfiMepyMgwiLkDVoakxBDhSAwprGd6a11JzWO6Ulx5IqQHfbBfdKznlXu0mtpulyelj63ACpV040pMPxVZSVPjFKyPJEDKL+uqyiO3CUgptf8WJpyY9JFwkKH5OYwPX5zqPYzr58WyUMLAIufrZcphGwQtkZm48+EnRKe6Glgqz0s02bjRX2fCxaj6kXDQ13jqe7BnhVebECYGhjHERponltRGqCSuER1sbwxWE1XHsTysagLZvAB5MbxPJuN0K3DwkXDIXL+xPs7y86xc1Ar2LPAYfpEF3RgBi65bcV1ZHIwf9lRZItjE7LR6gAZHjAMkPRIOSCy+/5AJqdt6dDnfVGuqsJVYUQzbzatc7QuJAsepnu1XauDFDi+04wojyB8DWGYyY5odCQeYUvcPob/ckk2JCO2KzG/2WW1Dslj7m6xJVVIQBiPKQ1wT10VhqVxXx2FYWrVFgYTiRBxhKmtaHgmHfMr8vZVqsSiXFNkZFLu161ZfjW/XkGcUWWIautBuhxJkzcK2n4kC3QZvDCPiHdbEwAFKmndUcbIq1YFwYAXDOwOkk2SxopZEHz3ILHaFCzoKGUZVJWYTiyzRSAkSDM/wHaYL3mjWiQ0fB45Vg+n1cKBq0lT2lO0Jh2Zt5+25NFmX+66wFdZ1ziPLIIxFkzSLBIs8GTJZd0LD63WSkcHg2Lkd8zLg4dgLVF2mJ8r+tZ5w8Nr61anJqiRmGfX7x5wdeV2MAdH2IWAtMywLNMvzqhP6vXIL4DO8GHyLh1hWVew4JFoqTZT9Wz3hC1HFKc+FADza9vXXzjyyHjGndVIuog3meLLvKzAPKz9ZWQ+s2HAhIaGRbRo4dHRRkoRpXAbuCV9JvKuDt/eq5rvc/16I5MAwGnYWRVHuabIsBkt8fI/X1AArNXkh/FljmIYqx/PCNF1Uuyd8afvuT9Dfcp003z/aL0LE4VixDT9alr6nig7lnhUZITb14tSGwI1aKDiEachLkDmODdeK2xPmr3287m/ZTsyz9R3dFGVCoqmpSUE0HmyzY3hH9vPrDoQ9dhrGdhxbliPyEvyPnmQi5j3hqxskzH7HmBgKR0CJ2nT/UOOYaCq12q0Xx51leAlzXybhG7xpxDiEKAA0FGLxaXKooid8/eJkNnWt+kMu9E1Ri87sSFhRwKbuf6jwoKP6YpdKBNGxQs8DvkAm3XCOk+RpNtokPeEby+vIl0S6vAc1jKnlF0V1U5S2Wk1dHWN1JvFjC95jRN2BVBn4SJ9YlDlRyadZHGb2hO+kLz+QrEsS0y8O4pDVLKLloVSpA2JqHCehnxiOqEGgLnGao0IUTpJ+WZbjKpkoMl30hO9NchsJYClYUgxl1gnNFWa5pYpOMVnPUI4dtzjbGDrPyvCLkO1zEjhKWeZFnKyTaqK2VNkTvrm2rtE1TeZJcwmysK1MiqhRe0gIESs+AKq5m/oORHHEs7ACqWrA+IVVuV4nU/UzonEIwTV62OEkGlPLJbE+SrOOjqWAg44KdWrUBmYgqlFJ1kh6i7xVlGX5bU5WixqLkDJqMCGQ3DoJmYQuCpLoYmuHDd7PsAIRsSIxNu1ed79cbVfluppsDeqB8F0dKVPIDJVAkpCUm+WKgsl4sUM+NLDnBI6ux6gmeb7E6qkZmb4bfVfT9TIO8/DNUlBi1/XOrWJZggwwbb4janlx8q8ae1YQ6CpfUXE7MyWlWkRFauB6yr1gB1v61nLzJccYKalb1IFEik9gGqOLvY58DN7dUXXOaBf0g5Zu4Nd8AAyDKddmHvzhW3/DyHTJgEGsq5hnCaJelfEfQBoG0HFEEoP3RcwaEue8NgDccY5LIssqd21lzGT4ENO8tXF3xyfYqevazQxRaCuovP0HEAUWpLlqqmirvkBggbVNUkh/IbVw+oAtt9SuLzfioB7i0vydi1R0aiFs2zW4c0G4+jwVHXJA0UuD9qsk34HQgEGKUhJ5B4HT7iWuHVVuHYuke2OwdXLILd473kn5tkMd0gg/VvmrZ1LzDgAa9k4ly65aBc7NRVl+LXEYWlYI/ykTmKTtZ9W6yPLxBvGQH77XXE9s1MCNwpwSpWO75UwYsDCyYRdGTnXGDYWmuSZrqCrHsrwQUhALjGyrvH5iNuZmvBDukOO/2f2pHM0q26XdV49sUiGoM3Acd8oHfkRKkj7GSB2SKGKYpOSLEf2mSuNwN+JOokOd5u1zLPYQuYWcLCDDdf4OoqjrnCI7ctjFFV80cr+Pg+R5EOeopHKMWLsp7BBCAmH97u2c5FBrG2eVi4u6fXrNecUYDIcu8fhspmfnhiTCWFVl8qVYVWJbqgjJlOhkWJXGwTzUS0eqAh2jy7OQjRFlVryzKHEnyqSQyqaNHwYOJ4tqoLcmZ5xC/6HmPXitySPZHABpjWPvWeqca1ekqlkVB6oscrrXrsZhLWWc0zXQgXD09OywVVWW7tZfbIEjQIrpY1WTRc3zyJfOx36W5WOENqfe0/jbIb47sxrcnU41Q3yE4CdgbTRZd2JSDuCVzCzLRT7Gwein/uEELcqIAwt2/5vLJTIF5VZDARC3p/d5xaLZ2Yo5yoLiUw94kuUQ1gM9W7SAalJgVeR1RyFFVdVfE5cYWgrlKsHbJ/id+vgzbBEEX0gUOWx8L9A0MWwrr0ZjuhDKeZ7Vlpif3dF6U05rMYatpxlH2u0nuNmBExQ1TFJmdWPmkE5Z2DrERu9uQzmtp/n0dg8ipOsRmr6liaJK1tiiOEkMMoC4Kz8yeFNt3ivgnK2JQvkoNz1IgCNI8hC8oBPDcEr1YgMDGMZdeYC318ttVL03E8/XtX3+gICm9fOWSnptREOLdep5MIKtgjLpap8U5ldEvaVc52sTP29qEkT7TeqIckCchJU0inccwHCxzWzFNgz+vR0M5+tLR4/bHgsOsm9Fk1VyG3GTgIZ6cZskitnXBhJqo19N/UZsg84JZzhrxc2zTFbJCBrmJoZMuGvCGcsmVYyzR5K+rKi/13l/cg19L18Ql2UiuKp0ncMUbB0G4quVa9jpcZWxY7svh+C/1+pPt3rurhB7bpsZtiylXQlgRQ2ZgH27ivaa/T56OX77vd9iholIRCMLcioMTrCdgulPbhjpYdWqUlLLFbX8Ll/0iug34SyPyIE8EmclxKHtM3KZLEpBQ/u2nGNSyc7fufyrNYi/+55mOWAtRnq+3oCbaPvH5ho0NO5moJRT1c6v+xUtL7nrv3vXplnP8kD2jJGtzcBr8/yoAQ3tkeK96bt+p650ENuvnMn0d//hPE9ZWRu7vCoIoLXNALAPSbNtvvONLryJk8X3K23+iz2kM5xAQqSMutWcwT4BL9+t7nO2Te26rW1l7MV+u3zJnF7uA/788Ry9EMesrhqIYrogJqUK1++6V+FildV2Ub5SWrzcyz3bw4DAdorrlWF3loGpyt3Ob12ZnEWblDTgwOebfj7sqlf248/2zDgV0dWXb3SjxpeN66ftDLS3VRpjL7QwtskLw3rh185UmONYLiJbhEuqV0v9K9nl7aYjuTFd0iEOscW/Mo2unYsx23PxinwdNd28o7Jd+wgbhFcFSfhDHHcBAOlpDYmdr55tMt+D48z1vtseRmWuTxwG45e+ga0wjIPO+pCtjIOORL1+Ps2QM4ZGFr/7hivfJUU22YQEiiTEntQPIIMY+umDyKibZwzNkUL10gY1W3OXtmfZrDID8sUw7pIDBnUnwAzx+rfOiZrL1rS7xeRvym8XS3vb3CA1ReXg0cgW6YG7a2+d9YXyae7/qVvKv7pHUxtbV8GhFVuHVivDCDCGg779m+e1PX/m3ujSyN/L9qi8dO/H2PJivTcwZBcRy7B0PuRqt8/cm6Nc00tTfBP7Z+9zA5x8p6F0t0+KZmV9kJ2/c27i+52CN4Q82wBvMwW8BGZ7/WQRLTBiiINB6dO9sy/nfFIl2D9nEdmgol4/BVsvQU58xYOCkbvnl846iAyqyq0CbqK3MO256Kpd22E96Dr3z6CdcxArsgq+sMKej/hAPqxtL1DVIbWoB+cIz1VW7O6tSJrDPmMaDCjDKW5sOaouDlGtR2dBf/i8qkuR2wcNtltNNTv1VEfXOVF4PrV7eJ73M2eyTylBZ2DIsyQ1224HkCOnaD4ddj8+k/2zhzn9lS6LQqChjG6klqrqssxzgsQ8u9z+iXP1Z4xOqW4/ETlTCjGChUNdFGWOFyRWEOgndeuZZyPMVs4gYqJ+OzSSjYxyNI5jAZDMyudOl3jq+RazdPWP0moZ7dhtVWbNkr2JTH9C6BNe8clnlMyz+OQgiueedkHVkFfQ7VG99FMnLj/7nJmPHzZ6WxymP+KOELKPFg8//awgdO95T5+VH9BPdVcI7ex8pFzLqyzXCecMT39LRabfPvK6w23vtx6GPLNrXqf4S2pqv12VK79T1ns7iAY9d+32s/M+Lz/LbbRYr3dt1f+OPR347LwZCxoXslxFpZkkNRnFO9Nn6PMPZ/X7f2RVlusmqUjx9PYaw8HPsJyvyH9FysWiSZK2CHor9XnhOaT/kMugqMVi3TTVHdVa3sa4Q/jp86nvyWKxME2S294IwF97HvB8rZorUpbfZevvrhr5F5/pPMkK95dlu+p2cVzz1C8/l/vNvZdjC76lWG88W33W0tuFFF0h/OL1v8W1YYTv79UfU9oVJH+3mEYPCB4RsvO1Ta/Iom3e/Hrp6+qmxwGEHz3497HsSej2KxOWHgE8JJy7vPhHWoN61qe5KB6+QPgvBeFUdwAud0z2b4Xbwwj/MUSYd9ohoHwC8CnCf0tRM2SnPeFjFX2WEEn/kkU95PlfD43MAELE/lN+sZXokZsYRvhvRTdEHkQyLxD+WzHqg1j0NcJ/KtO4m028TPgP5Yv38sF3CBH3bxQ2lncy+jcJ/43y1O2i0xiE/0CR8WbZcCRCJM5bDV89E6i9RzhvT+NGb2JkQuTMZXCW17tL4xPO1UK92gCdiBDpn+/1l9da2NMRft6oDjWh7xMi5pMWx796TtrEhJAYf2oNXPVUqjsBIULqJ3Iq8+IkzQ8Sttt1J+Z7xUOMSQiMUy5/T97lG4MQArl8Ir58cIh2RcYgJLtZxz+u+sd+3X6eyziEINa4iVU2JMm9K6MRwkAqY1kdUxln+FoZkRCEN96HNA3+8R8aIOMSgrDDtn/8kQw/WQV9XkYnJKLar3iQxH7Ptd+QSQiJ6Er+fP5R5sqLmcNjmYyQCK3jNLvPWWYp1q+erzyWTErYC0ueSubmRWIuyiiKyoWZFLlrY0sbfdJdkU8Qziv/J/zvl/8AlQLE/n9Ouc0AAAAASUVORK5CYII=" />
                        </a>
                    </div>
    
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav"> 
                            <li role="presentation" className="active nav-li"> 
                                <a href="/"> Home </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/minhas-fotos"> Minhas Fotos </a>
                            </li> 
    
                            <li role="presentation" className="active nav-li"> 
                                <a href="/solicitar-orcamento"> Solicitar Orçamento </a>
                            </li>

                            <li role="presentation" className="active nav-li"> 
                                <a href="/cadastro"> Cadastro </a>     
                            </li>

                            <li role="presentation" className="active nav-li">
                                <a href="/loja"> Loja </a>
                            </li> 

                            <li role="presentation" className="active nav-li"> 
                                <a href="/sobre"> Sobre Nós </a>
                            </li> 

                            <li role="presentation" className="active nav-li">
                                <a href="/login"> Login </a>
                            </li> 
                        </ul>
    
                        <form className="navbar-form navbar-right" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Procurar" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Pesquisar</button>
                                </span>
                            </div>
                            
                        </form>
                    </div>                
                    
                </div>
                
            </nav>
        )
    }   
}