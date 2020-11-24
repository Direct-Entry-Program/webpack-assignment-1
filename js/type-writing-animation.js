/*
 *  Copyright (c) 2020 Ranjith Suranga. All rights reserved.
 *  Licensed under the MIT License. See License file in the project root for license information.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/24/20
 **/

/*===============================================================================================================
 * Functions
 *===============================================================================================================*/

function typeWritingAnimation() {

    /* Let's check whether there is any HTML content embedded here */
    if (texts[j].charAt(k) === '<') {
        var closingPos = texts[j].substring(k, texts[j].length).search('>');
        if (closingPos !== -1) {
            k = k+ ++closingPos;
        }
    }

    var displayText = texts[j].substring(0, k++);
    console.log(k, displayText);

    if (k <= (texts[j].length + 1)) {
        title.innerHTML = displayText + '<span class="caret"></span>';
    }
    if (k > (texts[j].length + 10)) {
        k = 0;
        j++;
    }
    if (j >= texts.length) {
        j = 0;
    }
}
