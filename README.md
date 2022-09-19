https://github.com/seammour/monapp

# AwesomeComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Initilisation de l'application social media
## init projet
```Bash
ng new awesome-components --style=scss --skip-tests=true --routing
```
### ajouter bibliotheque material 
```Bash
ng add @angular/material
```

### generer 3 modules et le dernier avec son propore module de routing 
```Bash
ng g m core
ng g m shared
ng g m social-media --routing
````

### generer le composant header dans le module core 
```Bash
ng g c core/components/header
```

Le flag  --routing  permet d'ajouter automatiquement un module de routing depuis le CLI.

ng add  permet d'ajouter certaines bibliothèques comme Angular Material à votre projet Angular.

Pour utiliser un component Material, il faut importer le module correspondant.

Exporter des éléments depuis un module les met à disposition de tout autre module qui viendrait l'importer – par exemple, exporter MatToolbarModule dans SharedModule.



# etape pour l'implementation d'un resolver 

## service
preparer une methode du service qui renvoi un observable
```TypeScript
  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
```

## resolver
Implementer le resolver comme ceci
- considerer comme un service qui utiliser le service precedemment preparer
- dans notre cas nous n'utiliserons pas les deux parametre de la methode resolve
```TypeScript
@Injectable()
export class PostsResolver implements Resolve<Post[]> {
    constructor(private postService: PostService){}
    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>
    {
        return this.postService.getPosts();
    }
}
```

## Container (PostListComponent)
```TypeScript
posts$! : Observable<Post[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts$ =  this.route.data.pipe(
      map(data => data['posts'])
    );
    
  }
```

```Html
<h2>Posts</h2>
<app-post-list-item *ngFor="let post of posts$ | async" [post]="post">
</app-post-list-item>
```
## presenter (PostListItemComponent)

```TypeScript
  @Input() post!: Post;
  constructor() { }

  ngOnInit(): void {
  }
```

```HTML
<p>{{post.title }}</p>
```


# terminologies
## ** : wildcard
## <> : les chevrons
## `  :back qote 
