import { Component, OnInit } from '@angular/core';
import {ExitGuard, OnExit} from "../../../guards/exit.guard";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  onExit() {
    const confirm = Swal.fire({
      title: '¿Estas seguro de querer salir?',
      showDenyButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
          if (result.isConfirmed) {
            return true;
          }
          return false;
        }
    )
    return confirm;
  }

}
