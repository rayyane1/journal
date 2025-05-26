function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);

       let journal = data.journal

       /// ON ECRIT LE CODE ICI ! 


      
      let intro = document.getElementById('intro')

      let h1 = document.createElement('h1')
      h1.textContent = journal.nomJournal
      intro.appendChild(h1)

      let accroche = document.createElement('h2')
      accroche.textContent = journal.phraseAccroche
      intro.appendChild(accroche)

      let appelAction = document.createElement('p')
      appelAction.textContent = journal.texteAppelAction
      intro.appendChild(appelAction)




      
      let artRecent = document.getElementById('artRecent')
      console.log(artRecent);


      let imageArticle = document.createElement('img')
      imageArticle.src = journal.articlePrincipal.image
      imageArticle.alt = journal.articlePrincipal.titre
      artRecent.appendChild(imageArticle)

      let titleArticle = document.createElement('h2')
      titleArticle.textContent = journal.articlePrincipal.titre
      artRecent.appendChild(titleArticle)

      let dateArticle = document.createElement('h3')
      dateArticle.textContent = journal.articlePrincipal.date
      artRecent.appendChild(dateArticle)

      let themeArticle = document.createElement('p')
      themeArticle.textContent = journal.articlePrincipal.theme
      artRecent.appendChild(themeArticle)

      let descriptionArticle = document.createElement('p')
      descriptionArticle.textContent = journal.articlePrincipal.description
      artRecent.appendChild(descriptionArticle)



      

      let otherArticle = document.getElementById('otherArticle')
      console.log(otherArticle);

      let carteArticle = document.createElement('div')
      carteArticle.className = 'carteArticle'


      data.journal.articles.forEach(article => {

      let titleArticle = document.createElement('h2')
      titleArticle.textContent = article.titre
      carteArticle.appendChild(titleArticle)

      let dateArticle = document.createElement('h3')
      dateArticle.textContent = article.date
      carteArticle.appendChild(dateArticle)

      let themeArticle = document.createElement('p')
      themeArticle.textContent = article.theme
      carteArticle.appendChild(themeArticle)

      let imageArticle = document.createElement('img')
      imageArticle.src = article.image
      imageArticle.alt = article.titre
      carteArticle.appendChild(imageArticle)

      otherArticle.appendChild(carteArticle)
      });



      let equipe = document.getElementById('equipe')
     

        data.journal.auteurs.forEach(auteur => {

        let carteAuteur =document.createElement('div')
        carteAuteur.className = 'carteAuteur'

        let image = document.createElement('img')
        image.src = auteur.image
        carteAuteur.appendChild(image)   

        let prenom = document.createElement('p')
        prenom.textContent = auteur.prenom
        carteAuteur.appendChild(prenom)

        let typeExperience = document.createElement('p')
        typeExperience.textContent = auteur.typeExperience
        carteAuteur.appendChild(typeExperience)

        let presentation = document.createElement('p')
        presentation.textContent = auteur.presentation
        carteAuteur.appendChild(presentation)

       equipe.appendChild(carteAuteur)
        });



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici