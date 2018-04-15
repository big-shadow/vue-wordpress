import Vue from 'vue'

export default function (Vue) {
	Vue.quotes = {
        quotes: [
            '"To Get Respect, You Have To Give Respect."<br>' +
            '― Anonymous',

            '"A Cop Pulled Me Over Once. I Let Him Go With A Warning."<br>' +
            '― Chuck Norris',

            '"It Is The Mark Of An Educated Mind To Be Able To Entertain A Thought Without Accepting It."<br>' +
            '― Aristotle',

            '"If You Even Dream Of Beating Me You’d Better Wake Up And Apologize."<br>' +
            '― Muhammad Ali',

            '"Listen, Smile, Agree, And Then Do Whatever The F*ck You Were Gonna Do Anyway."<br>' +
            '― Robert Downey Jr.',

            '"In Theory There Is No Difference Between Theory And Practice. In Practice There Is."<br>' +
            '― Yogi Berra',

            '"Like Autumn Leaves His Sense Fell From Him...<br>' +
            'An Empty Glass Of Himself... Shattered. Somewhere Within...<br>' +
            'His Thoughts Like a Hundred Moths... Trapped in a Lampshade...<br>' +
            'Somewhere Within...<br>' +
            'Their Wings Banging and Burning... On Through Endless Night...<br>' +
            'Forever Awake He Lies Shaking and Stuttering...<br>' +
            'Praying For Someone To Turn Off The Light..."<br>' +
            '― Zack De La Rocha of Rage Against The Machine',

            '"If A Nation Expects To Be Ignorant And Free In A State Of Civilization, It Expects What Never Was And Never Will Be."<br>' +
            '― Thomas Jefferson, 1816.',

            '"You Have To Understand, Most Of These People Are Not Ready To Be Unplugged. And Many Of Them Are So Inert, So Hopelessly Dependent On The System, That They Will Fight To Protect It."<br>' +
            '― Morpheus, The Matrix',

            '"You Think Darkness Is Your Ally, But You Merely Adopted The Dark. I Was Born In It - Molded By It. I Didn\'t See The Light Until I Was Already A Man. By Then, To Me - It Was Only Blinding. The Shadows Betray You Because They Belong To Me."<br>' +
            '― Bane, The Dark Knight Rises',

            '"Hope Is For People Who Do Not Already Live In Grace."<br>' +
            '― Mexican Samaritan, Prison Break',

            '"Nobody Loves Me But My Mother, And She Could Be Jive\'n Too."<br>' +
            '― Blues Singer, Fresh Prince of Bel Air',

            '"Fortune Favors The Brave."<br>' +
            '― Latin Proverb',

            '"Which One Of U Motha\' F*ckaz\' Is Comin\' In Second?!"<br>' +
            '― CT Fletcher',

            '"I\'d Tighten My Belt \'Fore I Beg For Help."<br>' +
            '― Jay Z',

            '"Keep Business Business. Keep Pleasure Pleasure; And I Never Mix It, Ever, Ever."<br>' +
            '― Juelz Santana',

            '"Do, Or Do Not. There Is No Try."<br>' +
            '― Yoda',

            '"Don\'t Talk About It. Be About It."<br>' +
            '― Mos Def',

            '"Ignorance Is Bliss."<br>' +
            '― Anonymous',

            '"Rumble, Young Man, Rumble!"<br>' +
            '― Mohammed Ali',

            '"Heavy Is The Head That Wears The Crown."<br>' +
            '― Anonymous',

            '"Know Yourself, And You Will Win All Battles"<br>' +
            '― Sun Tzu',

            '"You Miss 100% Of The Shots You Don\'t Take."<br>' +
            '― Wayne Gretzky',

            '"We All Self Conscious, I\'m Just The First To Admit It."<br>' +
            '― Kanye West',

            '"If You Havin\' Girl Problems I Feel Bad For You Son, I Got 99 Problems And A B*tch Ain\'t One."<br>' +
            '― Jay Z',

            '"Birthdays Were The Worst Days, Now We Sip Champagne When We Thirsty."<br>' +
            '― Biggie',

            '"I\'m Not Cocky. I\'m Confident. So When You Tell Me I\'m The Best It\'s A Compliment."<br>' +
            '― Jadakiss',

            '"Aim to be the best king I could be,<br>' +
            'Ain\'t another rapper in the ring rival me,<br>' +
            'Float like a butterfly, sting like a bee,<br>' +
            'Talk like a gentleman, swing like a G"<br>' +
            '― Iron Solomon',

            '"I Ain\'t Really Tryna Play With These Boys, They Talk A Good One In The Booth But Got No Pain In They Voice.."<br>' +
            '― Bender',

            '"If Shootin\'s The Solution Then You Not That Clever, If You Don\'t Know Sh*t, Then You Still Know Better."<br>' +
            '― Murs',

            '"As A Kid I Had To Steal Breakfast, Now The Best Question You Have To Ask Me Is This A Real Necklace."<br>' +
            '― Crooked I',

            '"People Of Character Do The Right Thing Even If No One Else Does, Not Because They Think It Will Change The World But Because They Refuse To Be Changed By The World."<br>' +
            '― Michael Josephson',
        ],
        getRandomQuote(){
            let index = Math.floor(Math.random() * this.quotes.length);
            return this.quotes[index] + ` (Quote ${index}/${this.quotes.length})`;
        }
    }
}
Object.defineProperties(Vue.prototype, {
	$quotes: {
		get() {
			return Vue.quotes
		}
	}
});