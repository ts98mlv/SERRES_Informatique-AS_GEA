$(document).ready(() => {
    /**
     * tableau témoignages
     * @type {({testimonial: string, author: string}|{testimonial: string, author: string}|{testimonial: string, author: string}|{testimonial: string, author: string}|{testimonial: string, author: string})[]}
     */
    const temoignages = [
        {
            "testimonial" : "Suite à mon expérience professionnelle de plus de 10 ans en comptabilité, j’ai voulue faire" +
                " une formation continue et j’ai choisi l’As Gea pour connaître le domaine des RH afin de compléter mon " +
                "parcours et d’évoluer dans mon métier.",
            "author" : "Abla, 34 ans"
        },
        {
            "testimonial" : "J’ai choisi d’aller en AS GEA car en sortant de mon BTS MUC il me manquait des bases " +
                "solides dans le domaine de la gestion/finance pour pouvoir aller justement en licence de gestion.",
            "author" : "Quentin, 22 ans"
        },
        {
            "testimonial" : "Alors j’ai fait un bts muc. Je voulais continuer en licence pro, je m'étais inscrite à " +
                "toutes les licences ayant un rapport de près ou de loin avec le commerce. Le problème c’est qu’on m’a " +
                "refusé du fait que je n'avais pas assez de connaissances dans un seul domaine, donc sur la lettre de " +
                "refus de la lp agcf, on m’a proposé de faire AS GEA. Je suis donc inscrite et me voila. ",
            "author" : "Laeticia Bouvet, 21 ans"
        },
        {
            "testimonial" : "Je m'appelle Camille Raymond, j'ai 24 ans et je suis actuellement en dut Gestion des " +
                "Entreprises et des Administrations Année Spéciale. <br>" +
                "Auparavant, j'ai effectué un baccalauréat ES (économie et sociale) pour ensuite me diriger vers un " +
                "BTS MECP (Métiers de l'Esthétique, de la Cosmétique et de la Parfumerie). Ce qui m'a plus dans cette " +
                "formation c'est l'aspect marketing et c'est ce qui m'a décidé de me tourner vers ce DUT qui est plus " +
                "généraliste pour pouvoir accéder aux licences et aux master de marketing plus tard.",
            "author" : "Camille Raymond, 21 ans"
        },
        {
            "testimonial" : "Après un bac ES, j’ai obtenu une licence LLCE anglais. J’ai travaillé en tant " +
                "qu’enseignante de langue pendant deux ans, à l’étranger et en France. Le secteur de l’éducation ne " +
                "m’ayant pas convenu, je souhaitais me réorienter dans les métiers de la finance et de l’audit. J’ai " +
                "choisi le DUT GEA AS pour accéder à une troisième année de licence générale en finance retourner en L1.",
            "author" : "Sahra, 23 ans"
        },
        {
            "testimonial": "Après l'obtention d'une licence en langues étrangères, j'ai décidé de me réorienter dans le" +
                " domaine de la gestion. J'ai découvert l'Année Spéciale GEA, et j'ai trouvé que c'était une belle " +
                "opportunité pour acquérir une bonne formation sans avoir besoin de recommencer à zéro. De plus, les " +
                "enseignements sont variés et donnent une bonne base générale pour les poursuites d'études.",
            "author": "Maud, 23 ans"
        }
    ]

    /**
     * index du témoignage affiché
     * @type {number}
     */
    let index = 0;

    /**
     * nombre de témoignages
     * @type {number}
     */
    const nbTemoignages = temoignages.length;

    /**
     * fonction qui va afficher un nouveau témoignage
     * @param index
     */
    function afficherTemoignage() {
        $("article.temoignage").fadeOut("slow", () => {
            $("article.temoignage").remove();
            if (index >= nbTemoignages) {
                index = 0;
            }
            if(index < 0){
                index = ((nbTemoignages - 1));
            }
            let newArticle = $("<article></article>");
            let divTexte = $("<div></div>");
            newArticle.addClass("temoignage");
            divTexte.addClass("texte");
            divTexte.append("<p>" + temoignages[index].testimonial + "</p>");
            divTexte.append("<strong>" + temoignages[index].author + "</strong>");
            newArticle.append(divTexte);
            $("#articlesTemoignage").append(newArticle);
            $("#articlesTemoignage").fadeIn("slow");
        });
    }

    /**
     * listeners
     */
    $("#btnLeft").click(() => {
        index -= 1;
        afficherTemoignage();
    })
    $("#btnRight").click(() => {
        index += 1;
        afficherTemoignage();
    })
})
