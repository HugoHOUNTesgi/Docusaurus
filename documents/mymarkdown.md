# Docusaurus
# Initialisation du projet et configuration de Docusaurus.

# Initialisation du Projet et Configuration de Docusaurus

## Étapes

1. Créez un dépôt GitHub public nommé `docusaurus`.
2. Clonez le dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/HugoHOUNTesgi/Docusaurus
    cd docusaurus
    ```

3. Initialisation du site:
    ```bash
    npx create-docusaurus@latest my-website classic
    cd my-website
    ```

4. Déplacement du contenu du dossier `my-website` dans le répertoire racine du dépôt :
    ```bash
    mv * ../
    mv .[^.]* ../
    cd ..
    rm -rf my-website
    ```

5. J'ai commit les modifications
