import { NgModule } from '@angular/core';
import { PrefixPipe } from './features/book/pipes/prefix.pipe';


@NgModule({
    declarations: [ PrefixPipe ],
    exports: [ PrefixPipe ],
})
export class SharedModule {}
