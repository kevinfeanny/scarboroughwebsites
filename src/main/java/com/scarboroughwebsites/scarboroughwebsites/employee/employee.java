package com.scarboroughwebsites.scarboroughwebsites.employee;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="EMPLOYEE")
public class employee implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String position;

    @Column(nullable = false)
    private String contact;

    public employee(){
        super();
    }
    public employee(String id, String name, String position , String contact){

        super();
        this.id = id;
        this.name = name;
        this.position= position;
        this.contact=contact;
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

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
