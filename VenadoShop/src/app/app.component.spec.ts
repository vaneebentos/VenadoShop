import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


/* Este es un conjunto de pruebas para el `AppComponent` en una aplicación angular.La función `beforeEach`
Establece el módulo de prueba con las importaciones y declaraciones necesarias.Las tres funciones `it` son
Pruebas individuales que verifican si el componente de la aplicación se crea correctamente, si el título de la aplicación se
establece en 'VenadoShop', y si el título se representa correctamente en la plantilla HTML.El `expect '
declaraciones en cada prueba verifique si el resultado real coincide con el resultado esperado.*/
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'VenadoShop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('VenadoShop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('VenadoShopapp is running!');
  });
});
