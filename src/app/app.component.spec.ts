import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(component).toBeTruthy();
        });

        it('should display the initial counter value', () => {
            const counterElement = fixture.debugElement.query(By.css('h2')).nativeElement;
            expect(counterElement.textContent).toContain('Counter: 0');
        });

        it('should increment the counter when the Increment button is clicked', () => {
            const incrementButton = fixture.debugElement.query(By.css('button:first-of-type')).nativeElement;
            incrementButton.click();
            fixture.detectChanges();

            const counterElement = fixture.debugElement.query(By.css('h2')).nativeElement;
            expect(counterElement.textContent).toContain('Counter: 1');
        });

        it('should decrement the counter when the Decrement button is clicked', () => {
            const decrementButton = fixture.debugElement.query(By.css('button:last-of-type')).nativeElement;
            decrementButton.click();
            fixture.detectChanges();

            const counterElement = fixture.debugElement.query(By.css('h2')).nativeElement;
            expect(counterElement.textContent).toContain('Counter: -1');
        });
    });
});
