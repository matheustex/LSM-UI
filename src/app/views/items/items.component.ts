import { MatTableDataSource } from '@angular/material/table';
import { SectorsService } from './../../services/sectors.service';
import { Department } from './../../shared/models/department';
import { Sector } from './../../shared/models/sector';
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { OrdersService } from './../../services/orders.service';
import { Item } from './../../shared/models/item';
import { Order } from 'src/app/shared/models/order';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itemForm = new FormGroup({
    quantity: new FormControl(new Date(), [Validators.required]),
    sector: new FormControl('', [Validators.required]),
    department: new FormControl('')
  });

  dataSource = new MatTableDataSource<Item>();

  order: Order = new Order();
  items: Item[] = [];
  sectors: Sector[] = [];
  departments: Department[] = [];

  selectedSector: string;
  selectedDepartment: string;

  displayedColumns = ['Type', 'Sector', 'Dep', 'Quantity', 'Value'];
  isLoading = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private itemsService: ItemsService,
    private sectorsService: SectorsService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.order.id = this.route.snapshot.params.id;
    });
  }

  ngOnInit(): void {
    this.getOrder();
    this.getSectors();

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  openItemModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '200px';
    dialogConfig.width = '700px';

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  getOrder() {
    this.ordersService.getOrder(this.order.id)
      .subscribe((res: Order) => {
        this.order = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

  getOrderItems() {
    this.itemsService.findAll()
      .subscribe((res: Item[]) => {
        this.items = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

  getDepartments() {
    this.ordersService.getOrder(this.order.id)
      .subscribe((res: Order) => {
        this.order = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

  getSectors(){
    this.sectorsService.findAll()
      .subscribe((res: Sector[]) => {
        this.sectors = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

  onSubmit() {
    if (this.itemForm.valid) {

      const { quantity, department, sector } = this.itemForm.value;

      const item = new Item();

      item.quantity = quantity;
      item.departmentId = department;
      item.sectorId = sector;

      this.items.push(item);

      console.log('including new item');
      console.log(this.items);

      this.changeDetectorRefs.detectChanges();

      this.dataSource.data = this.items;
      // return this.itemsService.save()
      //   .pipe(
      //     tap(() =>
      //       this.snackBar.open('Planilha iniciada com sucesso')
      //     )
      //   )
    }
  }

}
