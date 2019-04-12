import {Injectable} from "@angular/core";
import {CustomerModel} from "../customers/customer.model";
import {ProductModel} from "../products/product.model";
import { Observable, Subscription } from "rxjs";


@Injectable()
export class CustomersService {

    customers: CustomerModel[] = [
        new CustomerModel('1','Customer 1','bojan@outlook.com', [
            new ProductModel('1','Product 1',1543),
            new ProductModel('5','Product 5',500),
            new ProductModel('4','Product 4',350.550)
        ]),
        new CustomerModel('2','Customer 2','test@outlook.com', [
                new ProductModel('2','Product 2',2.1234),
                new ProductModel('3','Product 3',300)
            ]),
        new CustomerModel('3','Customer 3','jondoe@outlook.com', [new ProductModel('3','Product 3',300)]),
        new CustomerModel('4','Customer 4','johnpapa@outlook.com', [new ProductModel('4','Product 4',350.550)]),
        new CustomerModel('5','Customer 5','toni@outlook.com', [
            new ProductModel('5','Product 5',500),
            new ProductModel('4','Product 4',350.550)
        ])
    ];

    constructor(){}

    getCustomers() {
        return this.customers;
    }

    createCustomer(customer){

        const newCustomer = new CustomerModel(customer.id, customer.name, customer.email, []);
        const newCustomerObservable = new Observable(
            observer => {
                        const {next, error} = observer;
                        setTimeout(() => {
                            if(newCustomer){
                                this.customers.unshift(newCustomer);
                                observer.next('success');
                                observer.complete();
                            }else {
                                error('Customer not added!');
                            }
                        }, 2000);

            }
        );

        return newCustomerObservable;
    }

}