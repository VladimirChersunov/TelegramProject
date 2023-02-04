package itstep.thesis.telegram.models.UserModel;


import java.util.HashSet;

import java.util.Set;

import itstep.thesis.telegram.models.ChannelModel.Channel;
import itstep.thesis.telegram.models.GroupModel.Group;
import itstep.thesis.telegram.models.GroupModel.Members;
import itstep.thesis.telegram.models.RoleModel.Role;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity // аннотация указывает, что класс является постоянным классом Java.
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email") }) // аннотация предоставляет таблицу, которая отображает этот объект.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 200)
    private String username;

    @Column(name = "email", length = 200)
    private String email;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "image", length = 200)
    private String image;

    @Column(name = "password", length = 200)
    private String password;

    @Column(name = "age", length = 200)
    private int age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "isBlocked")
    private Boolean isBlocked;

    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "members_id")
    private Members members;

    
    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "userContacts_id")
    private UserContacts userContacts;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "user_channel", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
            @JoinColumn(name = "channel_id") })

    private Set<Channel> channels = new HashSet<>();


    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "user_groups", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
            @JoinColumn(name = "group_id") })

    private Set<Group> groups = new HashSet<>();
    
    

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
            @JoinColumn(name = "role_id") })

    private Set<Role> roles = new HashSet<>();


    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "user_settings", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
            @JoinColumn(name = "setting_id") })

    private Set<UserSetting> settings = new HashSet<>();

   public User(String name, String email, String password){
        this.username = name;
        this.email = email;
        this.password = password;

    }

    public User(String username, String email, String password, int age, String image, String phone) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
        this.image = image;
        this.phone = phone;        
      }

}
