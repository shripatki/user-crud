import { Injectable } from "@angular/core";
import { RepositoryService } from "../shared/repository.service";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private repositoryService: RepositoryService) {}

  createUser(user: User) {
    return this.repositoryService.create("users", user);
  }

  updateUser(user: User) {
    return this.repositoryService.update("users/" + user._id, user);
  }

  getAllUsers() {
    return this.repositoryService.getData("users");
  }

  getUserById(userId: string) {
    return this.repositoryService.getData("users/" + userId);
  }

  deleteUser(userId: string) {
    return this.repositoryService.delete("users/" + userId);
  }
}
