const clickClaimBonusBtn = () => {
    const anchor = document.querySelector('.community-points-summary .tw-button .claimable-bonus__icon');
    if (anchor) {
        const el = anchor.closest('button.tw-button');
        el.click()
        console.log('Hooray!!! Bonus claimed ^_^');
    }
}

setTimeout(() => {
    clickClaimBonusBtn();
    setInterval(() => {
        clickClaimBonusBtn();
    }, 1000) // 10 minutes
}, 5000);
