export class User{
    id:number = 0;
    nombre:string = '';
    apellido:string ='';
    dni:number = 0;
    fechaNac:string = '';
    //direccion:object = Direccion;
}

export class Contacto{
    id:number = 0;
    email:string = '';
    linkInstagram:string = "https://www.instagram.com/";
    linkLinkedin:string = "https://ar.linkedin.com/";
    linkFacebook:string = "https://www.facebook.com/";
    linkGithub:string = "https://github.com/"
}

export class Cuenta{
    id:number = 0;
    email:string = '';
    userName:string = '';
    password:string = '';
}

export class Direccion{
    id:number = 0;
    pais:string = '';
    provincia:string = '';
    localidad:string = '';
    domicilio:string = '';
    codPostal:number = 0;
    
}

export class Educacion{
    id!:number;
    nombreInst:string;
    periodoEdu:string;
    tituloEdu:string;
    descripcionEdu:string;
    //certificado:string = '';
    logoEdu:string;

    constructor(nombreInst:string, periodoEdu:string, tituloEdu:string, descripcionEdu:string, logoEdu:string){
        this.nombreInst = nombreInst;
        this.periodoEdu = periodoEdu;
        this.tituloEdu = tituloEdu;
        this.descripcionEdu = descripcionEdu;
        this.logoEdu = logoEdu;
    }
}

export class Exp{
    id!:number;
    lugar:string;
    periodo:string;
    area:string;
    rol:string ;
    logo:string;

    constructor(lugar:string, periodo:string, area:string, rol:string, logo:string){
        this.lugar = lugar;
        this.periodo = periodo;
        this.area = area;
        this.rol = rol;
        this.logo = logo;
    }
}

export class Skill{
    id!:number;
    nombre:string;
    nivel:number;

    constructor(nombre:string, nivel:number){
        this.nombre = nombre;
        this.nivel = nivel;
    }
}

export class InfoPersonal{
    id!:number;
    nombreInfo:string;
    titulo:string;
    descripcion:string;
    ciudad:string;
    fechaNac:string;
    imgProfile:string;

    constructor(nombreInfo:string, titulo:string, descripcion:string, ciudad:string, fechaNac:string, imgProfile:string){
        this.nombreInfo = nombreInfo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.fechaNac = fechaNac;
        this.imgProfile = imgProfile;
    }

}

export class Proyectos{
    id!:number;
    tituloPro:string;
    tipoPro:string;
    periodoPro:string;
    descripcionPro:string;
    imgProject:string;

    constructor(tituloPro:string, tipoPro:string, periodoPro:string, descripcionPro:string, imgProject:string){
        this.tituloPro = tituloPro;
        this.tipoPro = tipoPro;
        this.periodoPro = periodoPro;
        this.descripcionPro = descripcionPro;
        this.imgProject = imgProject;
    }

}

export class NuevoUsuario{
    nombre!:string;
    nombreUsuario!:string;
    email!:string;
    password!:string;
    authorities!:string[];
}

export class LoginUsuario{
    nombreUsuario:string;
    password:string;

    constructor(nombreUsuario:string, password:string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}

export class JwtDto{
    token!:string;
    type!:string;
    nombreUsuario!:string;
    authorities!:string[];
}

