package com.scarboroughwebsites.scarboroughwebsites.customer;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name="CUSTOMER")
public class customer implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String message;
    public customer(){
        super();
    }
    public customer(String id, String name, String email, String message){
        super();
        this.id= id;
        this.name= name;
        this.email= email;
        this.message = message;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
