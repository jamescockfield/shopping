import { Request, Response, NextFunction } from "express";
import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as AnonymousStrategy } from "passport-anonymous";
import { IUser, User } from "data/User";

export const passportConfig = (passport: PassportStatic) => {

    passport.use(
        new LocalStrategy({
            usernameField: 'email',
        }, (username, password, done) => {
            User.findOne({ email: username, password })
                .then(user =>
                    user ?
                        done(null, user) :
                        done(null, false)
                ).catch(done);
        })
    );

    passport.use(new AnonymousStrategy());

    passport.serializeUser((user: IUser, done: any) => {
        done(null, user._id);
    });

    passport.deserializeUser((id: number, done: any) => {
        User.findById(id)
            .then(user => done(null, user))
            .catch(done);
    });
}

export const authenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        return next();
    } else {
        return res.status(401);
    }
};
