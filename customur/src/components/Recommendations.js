
function Recommendations() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const isSummer = currentMonth >= 6 && currentMonth <= 8
    const isFall = currentMonth >= 9 && currentMonth <= 11
    const isWinter = currentMonth === 0 || currentMonth === 1
    console.log(currentMonth)
    console.log(isSpring)
    var dayUntilSpring = 0
    var dayUntilSummer = 0
    var dayUntilFall = 0
    var dayUntilWinter = 0

    if (!isSpring) {
        dayUntilSpring = parseInt((new Date(2022, 2, 20).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
    if (!isSummer) {
        dayUntilSummer = parseInt((new Date(2022, 6, 20).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
    if (!isFall) {
        dayUntilFall = parseInt((new Date(2022, 9, 20).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
    if (!isWinter) {
        dayUntilWinter = parseInt((new Date(2022, 0, 20).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }


    const recommendationSpring = isSpring ? (
        <div>
            C'est le printemps, de grosses reductions t'attende !
        </div>
    ) : (
        <div>
            De grosse reduction au primptemps il te reste {dayUntilSpring} jours a attendre!
        </div>
    )
    const recommendationSummer = isSummer ? (
        <div>
            C'est l'été, de grosses reductions t'attende !
        </div>
    ) : (
        <div>
            De grosse reduction en Ete il te reste {dayUntilSummer} jours a attendre!
        </div>
    )
    const recommendationFall = isFall ? (
        <div>
            C'est l'automne, de grosses reductions t'attende !
        </div>
    ) : (
        <div>
            De grosse reduction en Automne il te reste {dayUntilFall} jours a attendre!
        </div>
    )
    const recommendationWinter = isWinter ? (
        <div>
            C'est l'hiver, de grosses reductions t'attende !
        </div>
    ) : (
        <div>
            De grosse reduction en Hiver il te reste {dayUntilWinter} jours a attendre!
        </div>
    )



    return (
        <div className="csm-recommendations">
            {recommendationSpring}
            {recommendationSummer}
            {recommendationFall}
            {recommendationWinter}
        </div>
    )
}

export default Recommendations