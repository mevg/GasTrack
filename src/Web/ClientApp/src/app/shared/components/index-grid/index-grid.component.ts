import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
interface Column {
  field: string;
  header: string;
}

interface Data {
  [key: string]: any;
}

@Component({
  selector: 'app-index-grid',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './index-grid.component.html',
  styleUrl: './index-grid.component.css'
})
export class IndexGridComponent {
  @Input() cols: Column[] = [];
  @Input() data: Data[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  
  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }
}
