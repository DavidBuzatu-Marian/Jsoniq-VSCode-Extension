// Generated from ./src/grammar/antlr4ng/jsoniq.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { jsoniqListener } from "./jsoniqListener.js";
import { jsoniqVisitor } from "./jsoniqVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class jsoniqParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly Kfor = 38;
    public static readonly Klet = 39;
    public static readonly Kwhere = 40;
    public static readonly Kgroup = 41;
    public static readonly Kby = 42;
    public static readonly Korder = 43;
    public static readonly Kreturn = 44;
    public static readonly Kif = 45;
    public static readonly Kin = 46;
    public static readonly Kas = 47;
    public static readonly Kat = 48;
    public static readonly Kallowing = 49;
    public static readonly Kempty = 50;
    public static readonly Kcount = 51;
    public static readonly Kstable = 52;
    public static readonly Kascending = 53;
    public static readonly Kdescending = 54;
    public static readonly Ksome = 55;
    public static readonly Kevery = 56;
    public static readonly Ksatisfies = 57;
    public static readonly Kcollation = 58;
    public static readonly Kgreatest = 59;
    public static readonly Kleast = 60;
    public static readonly Kswitch = 61;
    public static readonly Kcase = 62;
    public static readonly Ktry = 63;
    public static readonly Kcatch = 64;
    public static readonly Kdefault = 65;
    public static readonly Kthen = 66;
    public static readonly Kelse = 67;
    public static readonly Ktypeswitch = 68;
    public static readonly Kor = 69;
    public static readonly Kand = 70;
    public static readonly Knot = 71;
    public static readonly Kto = 72;
    public static readonly Kinstance = 73;
    public static readonly Kof = 74;
    public static readonly Kstatically = 75;
    public static readonly Kis = 76;
    public static readonly Ktreat = 77;
    public static readonly Kcast = 78;
    public static readonly Kcastable = 79;
    public static readonly Kversion = 80;
    public static readonly Kjsoniq = 81;
    public static readonly Kunordered = 82;
    public static readonly Ktrue = 83;
    public static readonly Kfalse = 84;
    public static readonly Ktype = 85;
    public static readonly Kvalidate = 86;
    public static readonly Kannotate = 87;
    public static readonly Kdeclare = 88;
    public static readonly Kcontext = 89;
    public static readonly Kitem = 90;
    public static readonly Kvariable = 91;
    public static readonly Kinsert = 92;
    public static readonly Kdelete = 93;
    public static readonly Krename = 94;
    public static readonly Kreplace = 95;
    public static readonly Kcopy = 96;
    public static readonly Kmodify = 97;
    public static readonly Kappend = 98;
    public static readonly Kinto = 99;
    public static readonly Kvalue = 100;
    public static readonly Kjson = 101;
    public static readonly Kwith = 102;
    public static readonly Kposition = 103;
    public static readonly Kbreak = 104;
    public static readonly Kloop = 105;
    public static readonly Kcontinue = 106;
    public static readonly Kexit = 107;
    public static readonly Kreturning = 108;
    public static readonly Kwhile = 109;
    public static readonly STRING = 110;
    public static readonly ArgumentPlaceholder = 111;
    public static readonly Plus = 112;
    public static readonly Minus = 113;
    public static readonly Times = 114;
    public static readonly Div = 115;
    public static readonly ReferenceSymbol = 116;
    public static readonly BracketOpen = 117;
    public static readonly BracketClose = 118;
    public static readonly ReferenceContextSymbol = 119;
    public static readonly BraceOpen = 120;
    public static readonly BraceClose = 121;
    public static readonly BraceOr = 122;
    public static readonly SquareBracketOpen = 123;
    public static readonly SquareBracketClose = 124;
    public static readonly AnnotationSymbol = 125;
    public static readonly Dot = 126;
    public static readonly Exclamation = 127;
    public static readonly Equal = 128;
    public static readonly Or = 129;
    public static readonly Not = 130;
    public static readonly Less = 131;
    public static readonly LessEq = 132;
    public static readonly Greater = 133;
    public static readonly GreaterEq = 134;
    public static readonly Comma = 135;
    public static readonly NullLiteral = 136;
    public static readonly Literal = 137;
    public static readonly NumericLiteral = 138;
    public static readonly IntegerLiteral = 139;
    public static readonly DecimalLiteral = 140;
    public static readonly DoubleLiteral = 141;
    public static readonly WS = 142;
    public static readonly NCName = 143;
    public static readonly XQComment = 144;
    public static readonly ContentChar = 145;
    public static readonly RULE_moduleAndThisIsIt = 0;
    public static readonly RULE_module = 1;
    public static readonly RULE_mainModule = 2;
    public static readonly RULE_libraryModule = 3;
    public static readonly RULE_prolog = 4;
    public static readonly RULE_program = 5;
    public static readonly RULE_statements = 6;
    public static readonly RULE_statementsAndExpr = 7;
    public static readonly RULE_statementsAndOptionalExpr = 8;
    public static readonly RULE_statement = 9;
    public static readonly RULE_applyStatement = 10;
    public static readonly RULE_assignStatement = 11;
    public static readonly RULE_blockStatement = 12;
    public static readonly RULE_breakStatement = 13;
    public static readonly RULE_continueStatement = 14;
    public static readonly RULE_exitStatement = 15;
    public static readonly RULE_flowrStatement = 16;
    public static readonly RULE_ifStatement = 17;
    public static readonly RULE_switchStatement = 18;
    public static readonly RULE_switchCaseStatement = 19;
    public static readonly RULE_tryCatchStatement = 20;
    public static readonly RULE_catchCaseStatement = 21;
    public static readonly RULE_typeSwitchStatement = 22;
    public static readonly RULE_caseStatement = 23;
    public static readonly RULE_annotation = 24;
    public static readonly RULE_annotations = 25;
    public static readonly RULE_varDeclStatement = 26;
    public static readonly RULE_varDeclForStatement = 27;
    public static readonly RULE_whileStatement = 28;
    public static readonly RULE_setter = 29;
    public static readonly RULE_namespaceDecl = 30;
    public static readonly RULE_annotatedDecl = 31;
    public static readonly RULE_defaultCollationDecl = 32;
    public static readonly RULE_orderingModeDecl = 33;
    public static readonly RULE_emptyOrderDecl = 34;
    public static readonly RULE_decimalFormatDecl = 35;
    public static readonly RULE_qname = 36;
    public static readonly RULE_dfPropertyName = 37;
    public static readonly RULE_moduleImport = 38;
    public static readonly RULE_varDecl = 39;
    public static readonly RULE_contextItemDecl = 40;
    public static readonly RULE_functionDecl = 41;
    public static readonly RULE_typeDecl = 42;
    public static readonly RULE_schemaLanguage = 43;
    public static readonly RULE_paramList = 44;
    public static readonly RULE_param = 45;
    public static readonly RULE_expr = 46;
    public static readonly RULE_exprSingle = 47;
    public static readonly RULE_exprSimple = 48;
    public static readonly RULE_flowrExpr = 49;
    public static readonly RULE_forClause = 50;
    public static readonly RULE_forVar = 51;
    public static readonly RULE_letClause = 52;
    public static readonly RULE_letVar = 53;
    public static readonly RULE_whereClause = 54;
    public static readonly RULE_groupByClause = 55;
    public static readonly RULE_groupByVar = 56;
    public static readonly RULE_orderByClause = 57;
    public static readonly RULE_orderByExpr = 58;
    public static readonly RULE_countClause = 59;
    public static readonly RULE_quantifiedExpr = 60;
    public static readonly RULE_quantifiedExprVar = 61;
    public static readonly RULE_switchExpr = 62;
    public static readonly RULE_switchCaseClause = 63;
    public static readonly RULE_typeSwitchExpr = 64;
    public static readonly RULE_caseClause = 65;
    public static readonly RULE_ifExpr = 66;
    public static readonly RULE_tryCatchExpr = 67;
    public static readonly RULE_catchClause = 68;
    public static readonly RULE_orExpr = 69;
    public static readonly RULE_andExpr = 70;
    public static readonly RULE_notExpr = 71;
    public static readonly RULE_comparisonExpr = 72;
    public static readonly RULE_stringConcatExpr = 73;
    public static readonly RULE_rangeExpr = 74;
    public static readonly RULE_additiveExpr = 75;
    public static readonly RULE_multiplicativeExpr = 76;
    public static readonly RULE_instanceOfExpr = 77;
    public static readonly RULE_isStaticallyExpr = 78;
    public static readonly RULE_treatExpr = 79;
    public static readonly RULE_castableExpr = 80;
    public static readonly RULE_castExpr = 81;
    public static readonly RULE_arrowExpr = 82;
    public static readonly RULE_arrowFunctionSpecifier = 83;
    public static readonly RULE_unaryExpr = 84;
    public static readonly RULE_valueExpr = 85;
    public static readonly RULE_validateExpr = 86;
    public static readonly RULE_annotateExpr = 87;
    public static readonly RULE_simpleMapExpr = 88;
    public static readonly RULE_postFixExpr = 89;
    public static readonly RULE_arrayLookup = 90;
    public static readonly RULE_arrayUnboxing = 91;
    public static readonly RULE_predicate = 92;
    public static readonly RULE_objectLookup = 93;
    public static readonly RULE_primaryExpr = 94;
    public static readonly RULE_blockExpr = 95;
    public static readonly RULE_varRef = 96;
    public static readonly RULE_parenthesizedExpr = 97;
    public static readonly RULE_contextItemExpr = 98;
    public static readonly RULE_orderedExpr = 99;
    public static readonly RULE_unorderedExpr = 100;
    public static readonly RULE_functionCall = 101;
    public static readonly RULE_argumentList = 102;
    public static readonly RULE_argument = 103;
    public static readonly RULE_functionItemExpr = 104;
    public static readonly RULE_namedFunctionRef = 105;
    public static readonly RULE_inlineFunctionExpr = 106;
    public static readonly RULE_insertExpr = 107;
    public static readonly RULE_deleteExpr = 108;
    public static readonly RULE_renameExpr = 109;
    public static readonly RULE_replaceExpr = 110;
    public static readonly RULE_transformExpr = 111;
    public static readonly RULE_appendExpr = 112;
    public static readonly RULE_updateLocator = 113;
    public static readonly RULE_copyDecl = 114;
    public static readonly RULE_sequenceType = 115;
    public static readonly RULE_objectConstructor = 116;
    public static readonly RULE_itemType = 117;
    public static readonly RULE_functionTest = 118;
    public static readonly RULE_anyFunctionTest = 119;
    public static readonly RULE_typedFunctionTest = 120;
    public static readonly RULE_singleType = 121;
    public static readonly RULE_pairConstructor = 122;
    public static readonly RULE_arrayConstructor = 123;
    public static readonly RULE_uriLiteral = 124;
    public static readonly RULE_stringLiteral = 125;
    public static readonly RULE_keyWords = 126;

    public static readonly literalNames = [
        null, "';'", "'module'", "'namespace'", "':='", "'|'", "'ordering'", 
        "'ordered'", "'decimal-format'", "':'", "'decimal-separator'", "'grouping-separator'", 
        "'infinity'", "'minus-sign'", "'NaN'", "'percent'", "'per-mille'", 
        "'zero-digit'", "'digit'", "'pattern-separator'", "'import'", "'external'", 
        "'function'", "'jsound'", "'compact'", "'verbose'", "'schema'", 
        "'eq'", "'ne'", "'lt'", "'le'", "'gt'", "'ge'", "'div'", "'idiv'", 
        "'mod'", "'#'", "'|}'", "'for'", "'let'", "'where'", "'group'", 
        "'by'", "'order'", "'return'", "'if'", "'in'", "'as'", "'at'", "'allowing'", 
        "'empty'", "'count'", "'stable'", "'ascending'", "'descending'", 
        "'some'", "'every'", "'satisfies'", "'collation'", "'greatest'", 
        "'least'", "'switch'", "'case'", "'try'", "'catch'", "'default'", 
        "'then'", "'else'", "'typeswitch'", "'or'", "'and'", "'not'", "'to'", 
        "'instance'", "'of'", "'statically'", "'is'", "'treat'", "'cast'", 
        "'castable'", "'version'", "'jsoniq'", "'unordered'", "'true'", 
        "'false'", "'type'", "'validate'", "'annotate'", "'declare'", "'context'", 
        "'item'", "'variable'", "'insert'", "'delete'", "'rename'", "'replace'", 
        "'copy'", "'modify'", "'append'", "'into'", "'value'", "'json'", 
        "'with'", "'position'", "'break'", "'loop'", "'continue'", "'exit'", 
        "'returning'", "'while'", null, "'?'", "'+'", "'-'", "'*'", "'/'", 
        "'$'", "'('", "')'", "'$$'", "'{'", "'}'", "'{|'", "'['", "']'", 
        "'%'", "'.'", "'!'", "'='", "'||'", "'!='", "'<'", "'<='", "'>'", 
        "'>='", "','", "'null'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "Kfor", "Klet", "Kwhere", "Kgroup", 
        "Kby", "Korder", "Kreturn", "Kif", "Kin", "Kas", "Kat", "Kallowing", 
        "Kempty", "Kcount", "Kstable", "Kascending", "Kdescending", "Ksome", 
        "Kevery", "Ksatisfies", "Kcollation", "Kgreatest", "Kleast", "Kswitch", 
        "Kcase", "Ktry", "Kcatch", "Kdefault", "Kthen", "Kelse", "Ktypeswitch", 
        "Kor", "Kand", "Knot", "Kto", "Kinstance", "Kof", "Kstatically", 
        "Kis", "Ktreat", "Kcast", "Kcastable", "Kversion", "Kjsoniq", "Kunordered", 
        "Ktrue", "Kfalse", "Ktype", "Kvalidate", "Kannotate", "Kdeclare", 
        "Kcontext", "Kitem", "Kvariable", "Kinsert", "Kdelete", "Krename", 
        "Kreplace", "Kcopy", "Kmodify", "Kappend", "Kinto", "Kvalue", "Kjson", 
        "Kwith", "Kposition", "Kbreak", "Kloop", "Kcontinue", "Kexit", "Kreturning", 
        "Kwhile", "STRING", "ArgumentPlaceholder", "Plus", "Minus", "Times", 
        "Div", "ReferenceSymbol", "BracketOpen", "BracketClose", "ReferenceContextSymbol", 
        "BraceOpen", "BraceClose", "BraceOr", "SquareBracketOpen", "SquareBracketClose", 
        "AnnotationSymbol", "Dot", "Exclamation", "Equal", "Or", "Not", 
        "Less", "LessEq", "Greater", "GreaterEq", "Comma", "NullLiteral", 
        "Literal", "NumericLiteral", "IntegerLiteral", "DecimalLiteral", 
        "DoubleLiteral", "WS", "NCName", "XQComment", "ContentChar"
    ];
    public static readonly ruleNames = [
        "moduleAndThisIsIt", "module", "mainModule", "libraryModule", "prolog", 
        "program", "statements", "statementsAndExpr", "statementsAndOptionalExpr", 
        "statement", "applyStatement", "assignStatement", "blockStatement", 
        "breakStatement", "continueStatement", "exitStatement", "flowrStatement", 
        "ifStatement", "switchStatement", "switchCaseStatement", "tryCatchStatement", 
        "catchCaseStatement", "typeSwitchStatement", "caseStatement", "annotation", 
        "annotations", "varDeclStatement", "varDeclForStatement", "whileStatement", 
        "setter", "namespaceDecl", "annotatedDecl", "defaultCollationDecl", 
        "orderingModeDecl", "emptyOrderDecl", "decimalFormatDecl", "qname", 
        "dfPropertyName", "moduleImport", "varDecl", "contextItemDecl", 
        "functionDecl", "typeDecl", "schemaLanguage", "paramList", "param", 
        "expr", "exprSingle", "exprSimple", "flowrExpr", "forClause", "forVar", 
        "letClause", "letVar", "whereClause", "groupByClause", "groupByVar", 
        "orderByClause", "orderByExpr", "countClause", "quantifiedExpr", 
        "quantifiedExprVar", "switchExpr", "switchCaseClause", "typeSwitchExpr", 
        "caseClause", "ifExpr", "tryCatchExpr", "catchClause", "orExpr", 
        "andExpr", "notExpr", "comparisonExpr", "stringConcatExpr", "rangeExpr", 
        "additiveExpr", "multiplicativeExpr", "instanceOfExpr", "isStaticallyExpr", 
        "treatExpr", "castableExpr", "castExpr", "arrowExpr", "arrowFunctionSpecifier", 
        "unaryExpr", "valueExpr", "validateExpr", "annotateExpr", "simpleMapExpr", 
        "postFixExpr", "arrayLookup", "arrayUnboxing", "predicate", "objectLookup", 
        "primaryExpr", "blockExpr", "varRef", "parenthesizedExpr", "contextItemExpr", 
        "orderedExpr", "unorderedExpr", "functionCall", "argumentList", 
        "argument", "functionItemExpr", "namedFunctionRef", "inlineFunctionExpr", 
        "insertExpr", "deleteExpr", "renameExpr", "replaceExpr", "transformExpr", 
        "appendExpr", "updateLocator", "copyDecl", "sequenceType", "objectConstructor", 
        "itemType", "functionTest", "anyFunctionTest", "typedFunctionTest", 
        "singleType", "pairConstructor", "arrayConstructor", "uriLiteral", 
        "stringLiteral", "keyWords",
    ];

    public get grammarFileName(): string { return "jsoniq.g4"; }
    public get literalNames(): (string | null)[] { return jsoniqParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return jsoniqParser.symbolicNames; }
    public get ruleNames(): string[] { return jsoniqParser.ruleNames; }
    public get serializedATN(): number[] { return jsoniqParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, jsoniqParser._ATN, jsoniqParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public moduleAndThisIsIt(): ModuleAndThisIsItContext {
        let localContext = new ModuleAndThisIsItContext(this.context, this.state);
        this.enterRule(localContext, 0, jsoniqParser.RULE_moduleAndThisIsIt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.module_();
            this.state = 255;
            this.match(jsoniqParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_(): ModuleContext {
        let localContext = new ModuleContext(this.context, this.state);
        this.enterRule(localContext, 2, jsoniqParser.RULE_module);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 262;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                {
                this.state = 257;
                this.match(jsoniqParser.Kjsoniq);
                this.state = 258;
                this.match(jsoniqParser.Kversion);
                this.state = 259;
                localContext._vers = this.stringLiteral();
                this.state = 260;
                this.match(jsoniqParser.T__0);
                }
                break;
            }
            this.state = 266;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.T__1:
                {
                this.state = 264;
                this.libraryModule();
                }
                break;
            case jsoniqParser.EOF:
            case jsoniqParser.T__6:
            case jsoniqParser.T__19:
            case jsoniqParser.T__21:
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.STRING:
            case jsoniqParser.Plus:
            case jsoniqParser.Minus:
            case jsoniqParser.ReferenceSymbol:
            case jsoniqParser.BracketOpen:
            case jsoniqParser.ReferenceContextSymbol:
            case jsoniqParser.BraceOpen:
            case jsoniqParser.BraceOr:
            case jsoniqParser.SquareBracketOpen:
            case jsoniqParser.AnnotationSymbol:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.Literal:
            case jsoniqParser.NCName:
                {
                this.state = 265;
                localContext._main = this.mainModule();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mainModule(): MainModuleContext {
        let localContext = new MainModuleContext(this.context, this.state);
        this.enterRule(localContext, 4, jsoniqParser.RULE_mainModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 268;
            this.prolog();
            this.state = 269;
            this.program();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public libraryModule(): LibraryModuleContext {
        let localContext = new LibraryModuleContext(this.context, this.state);
        this.enterRule(localContext, 6, jsoniqParser.RULE_libraryModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(jsoniqParser.T__1);
            this.state = 272;
            this.match(jsoniqParser.T__2);
            this.state = 273;
            this.match(jsoniqParser.NCName);
            this.state = 274;
            this.match(jsoniqParser.Equal);
            this.state = 275;
            this.uriLiteral();
            this.state = 276;
            this.match(jsoniqParser.T__0);
            this.state = 277;
            this.prolog();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prolog(): PrologContext {
        let localContext = new PrologContext(this.context, this.state);
        this.enterRule(localContext, 8, jsoniqParser.RULE_prolog);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 288;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 282;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
                    case 1:
                        {
                        this.state = 279;
                        this.setter();
                        }
                        break;
                    case 2:
                        {
                        this.state = 280;
                        this.namespaceDecl();
                        }
                        break;
                    case 3:
                        {
                        this.state = 281;
                        this.moduleImport();
                        }
                        break;
                    }
                    this.state = 284;
                    this.match(jsoniqParser.T__0);
                    }
                    }
                }
                this.state = 290;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            this.state = 296;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 291;
                    this.annotatedDecl();
                    this.state = 292;
                    this.match(jsoniqParser.T__0);
                    }
                    }
                }
                this.state = 298;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 10, jsoniqParser.RULE_program);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 299;
            this.statementsAndOptionalExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statements(): StatementsContext {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 12, jsoniqParser.RULE_statements);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 304;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 301;
                    this.statement();
                    }
                    }
                }
                this.state = 306;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementsAndExpr(): StatementsAndExprContext {
        let localContext = new StatementsAndExprContext(this.context, this.state);
        this.enterRule(localContext, 14, jsoniqParser.RULE_statementsAndExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.statements();
            this.state = 308;
            this.expr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementsAndOptionalExpr(): StatementsAndOptionalExprContext {
        let localContext = new StatementsAndOptionalExprContext(this.context, this.state);
        this.enterRule(localContext, 16, jsoniqParser.RULE_statementsAndOptionalExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.statements();
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7 || _la === 22 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 11980287) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131) !== 0)) {
                {
                this.state = 311;
                this.expr();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 18, jsoniqParser.RULE_statement);
        try {
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 314;
                this.applyStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 315;
                this.assignStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 316;
                this.blockStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 317;
                this.breakStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 318;
                this.continueStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 319;
                this.exitStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 320;
                this.flowrStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 321;
                this.ifStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 322;
                this.switchStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 323;
                this.tryCatchStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 324;
                this.typeSwitchStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 325;
                this.varDeclStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 326;
                this.whileStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public applyStatement(): ApplyStatementContext {
        let localContext = new ApplyStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, jsoniqParser.RULE_applyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.exprSimple();
            this.state = 330;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignStatement(): AssignStatementContext {
        let localContext = new AssignStatementContext(this.context, this.state);
        this.enterRule(localContext, 22, jsoniqParser.RULE_assignStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
            this.match(jsoniqParser.ReferenceSymbol);
            this.state = 333;
            this.qname();
            this.state = 334;
            this.match(jsoniqParser.T__3);
            this.state = 335;
            this.exprSingle();
            this.state = 336;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 24, jsoniqParser.RULE_blockStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 338;
            this.match(jsoniqParser.BraceOpen);
            this.state = 339;
            this.statements();
            this.state = 340;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, jsoniqParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(jsoniqParser.Kbreak);
            this.state = 343;
            this.match(jsoniqParser.Kloop);
            this.state = 344;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 28, jsoniqParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.match(jsoniqParser.Kcontinue);
            this.state = 347;
            this.match(jsoniqParser.Kloop);
            this.state = 348;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exitStatement(): ExitStatementContext {
        let localContext = new ExitStatementContext(this.context, this.state);
        this.enterRule(localContext, 30, jsoniqParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.match(jsoniqParser.Kexit);
            this.state = 351;
            this.match(jsoniqParser.Kreturning);
            this.state = 352;
            this.exprSingle();
            this.state = 353;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flowrStatement(): FlowrStatementContext {
        let localContext = new FlowrStatementContext(this.context, this.state);
        this.enterRule(localContext, 32, jsoniqParser.RULE_flowrStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 357;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kfor:
                {
                this.state = 355;
                localContext._start_for = this.forClause();
                }
                break;
            case jsoniqParser.Klet:
                {
                this.state = 356;
                localContext._start_let = this.letClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 24623) !== 0)) {
                {
                this.state = 365;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.Kfor:
                    {
                    this.state = 359;
                    this.forClause();
                    }
                    break;
                case jsoniqParser.Klet:
                    {
                    this.state = 360;
                    this.letClause();
                    }
                    break;
                case jsoniqParser.Kwhere:
                    {
                    this.state = 361;
                    this.whereClause();
                    }
                    break;
                case jsoniqParser.Kgroup:
                    {
                    this.state = 362;
                    this.groupByClause();
                    }
                    break;
                case jsoniqParser.Korder:
                case jsoniqParser.Kstable:
                    {
                    this.state = 363;
                    this.orderByClause();
                    }
                    break;
                case jsoniqParser.Kcount:
                    {
                    this.state = 364;
                    this.countClause();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 370;
            this.match(jsoniqParser.Kreturn);
            this.state = 371;
            localContext._returnStmt = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 34, jsoniqParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.match(jsoniqParser.Kif);
            this.state = 374;
            this.match(jsoniqParser.BracketOpen);
            this.state = 375;
            localContext._test_expr = this.expr();
            this.state = 376;
            this.match(jsoniqParser.BracketClose);
            this.state = 377;
            this.match(jsoniqParser.Kthen);
            this.state = 378;
            localContext._branch = this.statement();
            this.state = 379;
            this.match(jsoniqParser.Kelse);
            this.state = 380;
            localContext._else_branch = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchStatement(): SwitchStatementContext {
        let localContext = new SwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 36, jsoniqParser.RULE_switchStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.match(jsoniqParser.Kswitch);
            this.state = 383;
            this.match(jsoniqParser.BracketOpen);
            this.state = 384;
            localContext._condExpr = this.expr();
            this.state = 385;
            this.match(jsoniqParser.BracketClose);
            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 386;
                localContext._switchCaseStatement = this.switchCaseStatement();
                localContext._cases.push(localContext._switchCaseStatement!);
                }
                }
                this.state = 389;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 391;
            this.match(jsoniqParser.Kdefault);
            this.state = 392;
            this.match(jsoniqParser.Kreturn);
            this.state = 393;
            localContext._def = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchCaseStatement(): SwitchCaseStatementContext {
        let localContext = new SwitchCaseStatementContext(this.context, this.state);
        this.enterRule(localContext, 38, jsoniqParser.RULE_switchCaseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 395;
                this.match(jsoniqParser.Kcase);
                this.state = 396;
                localContext._exprSingle = this.exprSingle();
                localContext._cond.push(localContext._exprSingle!);
                }
                }
                this.state = 399;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 401;
            this.match(jsoniqParser.Kreturn);
            this.state = 402;
            localContext._ret = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryCatchStatement(): TryCatchStatementContext {
        let localContext = new TryCatchStatementContext(this.context, this.state);
        this.enterRule(localContext, 40, jsoniqParser.RULE_tryCatchStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.match(jsoniqParser.Ktry);
            this.state = 405;
            localContext._try_block = this.blockStatement();
            this.state = 407;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 406;
                    localContext._catchCaseStatement = this.catchCaseStatement();
                    localContext._catches.push(localContext._catchCaseStatement!);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 409;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchCaseStatement(): CatchCaseStatementContext {
        let localContext = new CatchCaseStatementContext(this.context, this.state);
        this.enterRule(localContext, 42, jsoniqParser.RULE_catchCaseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 411;
            this.match(jsoniqParser.Kcatch);
            this.state = 414;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Times:
                {
                this.state = 412;
                localContext._s114 = this.match(jsoniqParser.Times);
                localContext._jokers.push(localContext._s114!);
                }
                break;
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.NCName:
                {
                this.state = 413;
                localContext._qname = this.qname();
                localContext._errors.push(localContext._qname!);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 416;
                this.match(jsoniqParser.T__4);
                this.state = 419;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.Times:
                    {
                    this.state = 417;
                    localContext._s114 = this.match(jsoniqParser.Times);
                    localContext._jokers.push(localContext._s114!);
                    }
                    break;
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.NullLiteral:
                case jsoniqParser.NCName:
                    {
                    this.state = 418;
                    localContext._qname = this.qname();
                    localContext._errors.push(localContext._qname!);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                }
                this.state = 425;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 426;
            localContext._catch_block = this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSwitchStatement(): TypeSwitchStatementContext {
        let localContext = new TypeSwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 44, jsoniqParser.RULE_typeSwitchStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.match(jsoniqParser.Ktypeswitch);
            this.state = 429;
            this.match(jsoniqParser.BracketOpen);
            this.state = 430;
            localContext._cond = this.expr();
            this.state = 431;
            this.match(jsoniqParser.BracketClose);
            this.state = 433;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 432;
                localContext._caseStatement = this.caseStatement();
                localContext._cases.push(localContext._caseStatement!);
                }
                }
                this.state = 435;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 437;
            this.match(jsoniqParser.Kdefault);
            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 438;
                localContext._var_ref = this.varRef();
                }
            }

            this.state = 441;
            this.match(jsoniqParser.Kreturn);
            this.state = 442;
            localContext._def = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseStatement(): CaseStatementContext {
        let localContext = new CaseStatementContext(this.context, this.state);
        this.enterRule(localContext, 46, jsoniqParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 444;
            this.match(jsoniqParser.Kcase);
            this.state = 448;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 445;
                localContext._var_ref = this.varRef();
                this.state = 446;
                this.match(jsoniqParser.Kas);
                }
            }

            this.state = 450;
            localContext._sequenceType = this.sequenceType();
            localContext._union.push(localContext._sequenceType!);
            this.state = 455;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 451;
                this.match(jsoniqParser.T__4);
                this.state = 452;
                localContext._sequenceType = this.sequenceType();
                localContext._union.push(localContext._sequenceType!);
                }
                }
                this.state = 457;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 458;
            this.match(jsoniqParser.Kreturn);
            this.state = 459;
            localContext._ret = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotation(): AnnotationContext {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 48, jsoniqParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 461;
            this.match(jsoniqParser.AnnotationSymbol);
            this.state = 462;
            localContext._name = this.qname();
            this.state = 473;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 463;
                this.match(jsoniqParser.BracketOpen);
                this.state = 464;
                this.match(jsoniqParser.Literal);
                this.state = 469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 135) {
                    {
                    {
                    this.state = 465;
                    this.match(jsoniqParser.Comma);
                    this.state = 466;
                    this.match(jsoniqParser.Literal);
                    }
                    }
                    this.state = 471;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 472;
                this.match(jsoniqParser.BracketClose);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotations(): AnnotationsContext {
        let localContext = new AnnotationsContext(this.context, this.state);
        this.enterRule(localContext, 50, jsoniqParser.RULE_annotations);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 125) {
                {
                {
                this.state = 475;
                this.annotation();
                }
                }
                this.state = 480;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDeclStatement(): VarDeclStatementContext {
        let localContext = new VarDeclStatementContext(this.context, this.state);
        this.enterRule(localContext, 52, jsoniqParser.RULE_varDeclStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 481;
            this.annotations();
            this.state = 482;
            this.match(jsoniqParser.Kvariable);
            this.state = 483;
            this.varDeclForStatement();
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 484;
                this.match(jsoniqParser.Comma);
                this.state = 485;
                this.varDeclForStatement();
                }
                }
                this.state = 490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 491;
            this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDeclForStatement(): VarDeclForStatementContext {
        let localContext = new VarDeclForStatementContext(this.context, this.state);
        this.enterRule(localContext, 54, jsoniqParser.RULE_varDeclForStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            localContext._var_ref = this.varRef();
            this.state = 496;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 494;
                this.match(jsoniqParser.Kas);
                this.state = 495;
                this.sequenceType();
                }
            }

            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 498;
                this.match(jsoniqParser.T__3);
                this.state = 499;
                localContext._exprSingle = this.exprSingle();
                localContext._expr_vals.push(localContext._exprSingle!);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 56, jsoniqParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 502;
            this.match(jsoniqParser.Kwhile);
            this.state = 503;
            this.match(jsoniqParser.BracketOpen);
            this.state = 504;
            localContext._test_expr = this.expr();
            this.state = 505;
            this.match(jsoniqParser.BracketClose);
            this.state = 506;
            localContext._stmt = this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setter(): SetterContext {
        let localContext = new SetterContext(this.context, this.state);
        this.enterRule(localContext, 58, jsoniqParser.RULE_setter);
        try {
            this.state = 512;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 508;
                this.defaultCollationDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 509;
                this.orderingModeDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 510;
                this.emptyOrderDecl();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 511;
                this.decimalFormatDecl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespaceDecl(): NamespaceDeclContext {
        let localContext = new NamespaceDeclContext(this.context, this.state);
        this.enterRule(localContext, 60, jsoniqParser.RULE_namespaceDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 514;
            this.match(jsoniqParser.Kdeclare);
            this.state = 515;
            this.match(jsoniqParser.T__2);
            this.state = 516;
            this.match(jsoniqParser.NCName);
            this.state = 517;
            this.match(jsoniqParser.Equal);
            this.state = 518;
            this.uriLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotatedDecl(): AnnotatedDeclContext {
        let localContext = new AnnotatedDeclContext(this.context, this.state);
        this.enterRule(localContext, 62, jsoniqParser.RULE_annotatedDecl);
        try {
            this.state = 524;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 520;
                this.functionDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 521;
                this.varDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 522;
                this.typeDecl();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 523;
                this.contextItemDecl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public defaultCollationDecl(): DefaultCollationDeclContext {
        let localContext = new DefaultCollationDeclContext(this.context, this.state);
        this.enterRule(localContext, 64, jsoniqParser.RULE_defaultCollationDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.match(jsoniqParser.Kdeclare);
            this.state = 527;
            this.match(jsoniqParser.Kdefault);
            this.state = 528;
            this.match(jsoniqParser.Kcollation);
            this.state = 529;
            this.uriLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderingModeDecl(): OrderingModeDeclContext {
        let localContext = new OrderingModeDeclContext(this.context, this.state);
        this.enterRule(localContext, 66, jsoniqParser.RULE_orderingModeDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 531;
            this.match(jsoniqParser.Kdeclare);
            this.state = 532;
            this.match(jsoniqParser.T__5);
            this.state = 533;
            _la = this.tokenStream.LA(1);
            if(!(_la === 7 || _la === 82)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyOrderDecl(): EmptyOrderDeclContext {
        let localContext = new EmptyOrderDeclContext(this.context, this.state);
        this.enterRule(localContext, 68, jsoniqParser.RULE_emptyOrderDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 535;
            this.match(jsoniqParser.Kdeclare);
            this.state = 536;
            this.match(jsoniqParser.Kdefault);
            this.state = 537;
            this.match(jsoniqParser.Korder);
            this.state = 538;
            this.match(jsoniqParser.Kempty);
            {
            this.state = 539;
            localContext._emptySequenceOrder = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 59 || _la === 60)) {
                localContext._emptySequenceOrder = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalFormatDecl(): DecimalFormatDeclContext {
        let localContext = new DecimalFormatDeclContext(this.context, this.state);
        this.enterRule(localContext, 70, jsoniqParser.RULE_decimalFormatDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 541;
            this.match(jsoniqParser.Kdeclare);
            this.state = 546;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.T__7:
                {
                {
                this.state = 542;
                this.match(jsoniqParser.T__7);
                this.state = 543;
                this.qname();
                }
                }
                break;
            case jsoniqParser.Kdefault:
                {
                {
                this.state = 544;
                this.match(jsoniqParser.Kdefault);
                this.state = 545;
                this.match(jsoniqParser.T__7);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 554;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0)) {
                {
                {
                this.state = 548;
                this.dfPropertyName();
                this.state = 549;
                this.match(jsoniqParser.Equal);
                this.state = 550;
                this.stringLiteral();
                }
                }
                this.state = 556;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qname(): QnameContext {
        let localContext = new QnameContext(this.context, this.state);
        this.enterRule(localContext, 72, jsoniqParser.RULE_qname);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 562;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 559;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.NCName:
                    {
                    this.state = 557;
                    localContext._ns = this.match(jsoniqParser.NCName);
                    }
                    break;
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.NullLiteral:
                    {
                    this.state = 558;
                    localContext._nskw = this.keyWords();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 561;
                this.match(jsoniqParser.T__8);
                }
                break;
            }
            this.state = 566;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.NCName:
                {
                this.state = 564;
                localContext._local_name = this.match(jsoniqParser.NCName);
                }
                break;
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
                {
                this.state = 565;
                localContext._local_namekw = this.keyWords();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfPropertyName(): DfPropertyNameContext {
        let localContext = new DfPropertyNameContext(this.context, this.state);
        this.enterRule(localContext, 74, jsoniqParser.RULE_dfPropertyName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 568;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleImport(): ModuleImportContext {
        let localContext = new ModuleImportContext(this.context, this.state);
        this.enterRule(localContext, 76, jsoniqParser.RULE_moduleImport);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 570;
            this.match(jsoniqParser.T__19);
            this.state = 571;
            this.match(jsoniqParser.T__1);
            this.state = 575;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 572;
                this.match(jsoniqParser.T__2);
                this.state = 573;
                localContext._prefix = this.match(jsoniqParser.NCName);
                this.state = 574;
                this.match(jsoniqParser.Equal);
                }
            }

            this.state = 577;
            localContext._targetNamespace = this.uriLiteral();
            this.state = 587;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 578;
                this.match(jsoniqParser.Kat);
                this.state = 579;
                this.uriLiteral();
                this.state = 584;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 135) {
                    {
                    {
                    this.state = 580;
                    this.match(jsoniqParser.Comma);
                    this.state = 581;
                    this.uriLiteral();
                    }
                    }
                    this.state = 586;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDecl(): VarDeclContext {
        let localContext = new VarDeclContext(this.context, this.state);
        this.enterRule(localContext, 78, jsoniqParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 589;
            this.match(jsoniqParser.Kdeclare);
            this.state = 590;
            this.annotations();
            this.state = 591;
            this.match(jsoniqParser.Kvariable);
            this.state = 592;
            this.varRef();
            this.state = 595;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 593;
                this.match(jsoniqParser.Kas);
                this.state = 594;
                this.sequenceType();
                }
            }

            this.state = 604;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.T__3:
                {
                {
                this.state = 597;
                this.match(jsoniqParser.T__3);
                this.state = 598;
                this.exprSingle();
                }
                }
                break;
            case jsoniqParser.T__20:
                {
                {
                this.state = 599;
                localContext._external = this.match(jsoniqParser.T__20);
                this.state = 602;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                    this.state = 600;
                    this.match(jsoniqParser.T__3);
                    this.state = 601;
                    this.exprSingle();
                    }
                }

                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contextItemDecl(): ContextItemDeclContext {
        let localContext = new ContextItemDeclContext(this.context, this.state);
        this.enterRule(localContext, 80, jsoniqParser.RULE_contextItemDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 606;
            this.match(jsoniqParser.Kdeclare);
            this.state = 607;
            this.match(jsoniqParser.Kcontext);
            this.state = 608;
            this.match(jsoniqParser.Kitem);
            this.state = 611;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 609;
                this.match(jsoniqParser.Kas);
                this.state = 610;
                this.sequenceType();
                }
            }

            this.state = 620;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.T__3:
                {
                {
                this.state = 613;
                this.match(jsoniqParser.T__3);
                this.state = 614;
                this.exprSingle();
                }
                }
                break;
            case jsoniqParser.T__20:
                {
                {
                this.state = 615;
                localContext._external = this.match(jsoniqParser.T__20);
                this.state = 618;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                    this.state = 616;
                    this.match(jsoniqParser.T__3);
                    this.state = 617;
                    this.exprSingle();
                    }
                }

                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDecl(): FunctionDeclContext {
        let localContext = new FunctionDeclContext(this.context, this.state);
        this.enterRule(localContext, 82, jsoniqParser.RULE_functionDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 622;
            this.match(jsoniqParser.Kdeclare);
            this.state = 623;
            this.annotations();
            this.state = 624;
            this.match(jsoniqParser.T__21);
            this.state = 625;
            localContext._fn_name = this.qname();
            this.state = 626;
            this.match(jsoniqParser.BracketOpen);
            this.state = 628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 627;
                this.paramList();
                }
            }

            this.state = 630;
            this.match(jsoniqParser.BracketClose);
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 631;
                this.match(jsoniqParser.Kas);
                this.state = 632;
                localContext._return_type = this.sequenceType();
                }
            }

            this.state = 640;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.BraceOpen:
                {
                this.state = 635;
                this.match(jsoniqParser.BraceOpen);
                {
                this.state = 636;
                localContext._fn_body = this.statementsAndOptionalExpr();
                }
                this.state = 637;
                this.match(jsoniqParser.BraceClose);
                }
                break;
            case jsoniqParser.T__20:
                {
                this.state = 639;
                this.match(jsoniqParser.T__20);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDecl(): TypeDeclContext {
        let localContext = new TypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 84, jsoniqParser.RULE_typeDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 642;
            this.match(jsoniqParser.Kdeclare);
            this.state = 643;
            this.match(jsoniqParser.Ktype);
            this.state = 644;
            localContext._type_name = this.qname();
            this.state = 645;
            this.match(jsoniqParser.Kas);
            this.state = 647;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                {
                this.state = 646;
                localContext._schema = this.schemaLanguage();
                }
                break;
            }
            this.state = 649;
            localContext._type_definition = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaLanguage(): SchemaLanguageContext {
        let localContext = new SchemaLanguageContext(this.context, this.state);
        this.enterRule(localContext, 86, jsoniqParser.RULE_schemaLanguage);
        try {
            this.state = 657;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 651;
                this.match(jsoniqParser.T__22);
                this.state = 652;
                this.match(jsoniqParser.T__23);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 653;
                this.match(jsoniqParser.T__22);
                this.state = 654;
                this.match(jsoniqParser.T__24);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 655;
                this.match(jsoniqParser.Kjson);
                this.state = 656;
                this.match(jsoniqParser.T__25);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 88, jsoniqParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 659;
            this.param();
            this.state = 664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 660;
                this.match(jsoniqParser.Comma);
                this.state = 661;
                this.param();
                }
                }
                this.state = 666;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 90, jsoniqParser.RULE_param);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 667;
            this.match(jsoniqParser.ReferenceSymbol);
            this.state = 668;
            this.qname();
            this.state = 671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 669;
                this.match(jsoniqParser.Kas);
                this.state = 670;
                this.sequenceType();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 92, jsoniqParser.RULE_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 673;
            this.exprSingle();
            this.state = 678;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 674;
                this.match(jsoniqParser.Comma);
                this.state = 675;
                this.exprSingle();
                }
                }
                this.state = 680;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprSingle(): ExprSingleContext {
        let localContext = new ExprSingleContext(this.context, this.state);
        this.enterRule(localContext, 94, jsoniqParser.RULE_exprSingle);
        try {
            this.state = 687;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 681;
                this.exprSimple();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 682;
                this.flowrExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 683;
                this.switchExpr();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 684;
                this.typeSwitchExpr();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 685;
                this.ifExpr();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 686;
                this.tryCatchExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprSimple(): ExprSimpleContext {
        let localContext = new ExprSimpleContext(this.context, this.state);
        this.enterRule(localContext, 96, jsoniqParser.RULE_exprSimple);
        try {
            this.state = 697;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 689;
                this.quantifiedExpr();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 690;
                this.orExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 691;
                this.insertExpr();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 692;
                this.deleteExpr();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 693;
                this.renameExpr();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 694;
                this.replaceExpr();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 695;
                this.transformExpr();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 696;
                this.appendExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flowrExpr(): FlowrExprContext {
        let localContext = new FlowrExprContext(this.context, this.state);
        this.enterRule(localContext, 98, jsoniqParser.RULE_flowrExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 701;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kfor:
                {
                this.state = 699;
                localContext._start_for = this.forClause();
                }
                break;
            case jsoniqParser.Klet:
                {
                this.state = 700;
                localContext._start_let = this.letClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 711;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 24623) !== 0)) {
                {
                this.state = 709;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.Kfor:
                    {
                    this.state = 703;
                    this.forClause();
                    }
                    break;
                case jsoniqParser.Klet:
                    {
                    this.state = 704;
                    this.letClause();
                    }
                    break;
                case jsoniqParser.Kwhere:
                    {
                    this.state = 705;
                    this.whereClause();
                    }
                    break;
                case jsoniqParser.Kgroup:
                    {
                    this.state = 706;
                    this.groupByClause();
                    }
                    break;
                case jsoniqParser.Korder:
                case jsoniqParser.Kstable:
                    {
                    this.state = 707;
                    this.orderByClause();
                    }
                    break;
                case jsoniqParser.Kcount:
                    {
                    this.state = 708;
                    this.countClause();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 713;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 714;
            this.match(jsoniqParser.Kreturn);
            this.state = 715;
            localContext._return_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forClause(): ForClauseContext {
        let localContext = new ForClauseContext(this.context, this.state);
        this.enterRule(localContext, 100, jsoniqParser.RULE_forClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 717;
            this.match(jsoniqParser.Kfor);
            this.state = 718;
            localContext._forVar = this.forVar();
            localContext._vars.push(localContext._forVar!);
            this.state = 723;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 719;
                this.match(jsoniqParser.Comma);
                this.state = 720;
                localContext._forVar = this.forVar();
                localContext._vars.push(localContext._forVar!);
                }
                }
                this.state = 725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forVar(): ForVarContext {
        let localContext = new ForVarContext(this.context, this.state);
        this.enterRule(localContext, 102, jsoniqParser.RULE_forVar);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 726;
            localContext._var_ref = this.varRef();
            this.state = 729;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 727;
                this.match(jsoniqParser.Kas);
                this.state = 728;
                localContext._seq = this.sequenceType();
                }
            }

            this.state = 733;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 731;
                localContext._flag = this.match(jsoniqParser.Kallowing);
                this.state = 732;
                this.match(jsoniqParser.Kempty);
                }
            }

            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 735;
                this.match(jsoniqParser.Kat);
                this.state = 736;
                localContext._at = this.varRef();
                }
            }

            this.state = 739;
            this.match(jsoniqParser.Kin);
            this.state = 740;
            localContext._ex = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letClause(): LetClauseContext {
        let localContext = new LetClauseContext(this.context, this.state);
        this.enterRule(localContext, 104, jsoniqParser.RULE_letClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 742;
            this.match(jsoniqParser.Klet);
            this.state = 743;
            localContext._letVar = this.letVar();
            localContext._vars.push(localContext._letVar!);
            this.state = 748;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 744;
                this.match(jsoniqParser.Comma);
                this.state = 745;
                localContext._letVar = this.letVar();
                localContext._vars.push(localContext._letVar!);
                }
                }
                this.state = 750;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letVar(): LetVarContext {
        let localContext = new LetVarContext(this.context, this.state);
        this.enterRule(localContext, 106, jsoniqParser.RULE_letVar);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 751;
            localContext._var_ref = this.varRef();
            this.state = 754;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 752;
                this.match(jsoniqParser.Kas);
                this.state = 753;
                localContext._seq = this.sequenceType();
                }
            }

            this.state = 756;
            this.match(jsoniqParser.T__3);
            this.state = 757;
            localContext._ex = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 108, jsoniqParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 759;
            this.match(jsoniqParser.Kwhere);
            this.state = 760;
            this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 110, jsoniqParser.RULE_groupByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 762;
            this.match(jsoniqParser.Kgroup);
            this.state = 763;
            this.match(jsoniqParser.Kby);
            this.state = 764;
            localContext._groupByVar = this.groupByVar();
            localContext._vars.push(localContext._groupByVar!);
            this.state = 769;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 765;
                this.match(jsoniqParser.Comma);
                this.state = 766;
                localContext._groupByVar = this.groupByVar();
                localContext._vars.push(localContext._groupByVar!);
                }
                }
                this.state = 771;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByVar(): GroupByVarContext {
        let localContext = new GroupByVarContext(this.context, this.state);
        this.enterRule(localContext, 112, jsoniqParser.RULE_groupByVar);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 772;
            localContext._var_ref = this.varRef();
            this.state = 779;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4 || _la === 47) {
                {
                this.state = 775;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 773;
                    this.match(jsoniqParser.Kas);
                    this.state = 774;
                    localContext._seq = this.sequenceType();
                    }
                }

                this.state = 777;
                localContext._decl = this.match(jsoniqParser.T__3);
                this.state = 778;
                localContext._ex = this.exprSingle();
                }
            }

            this.state = 783;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 58) {
                {
                this.state = 781;
                this.match(jsoniqParser.Kcollation);
                this.state = 782;
                localContext._uri = this.uriLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 114, jsoniqParser.RULE_orderByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 790;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Korder:
                {
                {
                this.state = 785;
                this.match(jsoniqParser.Korder);
                this.state = 786;
                this.match(jsoniqParser.Kby);
                }
                }
                break;
            case jsoniqParser.Kstable:
                {
                {
                this.state = 787;
                localContext._stb = this.match(jsoniqParser.Kstable);
                this.state = 788;
                this.match(jsoniqParser.Korder);
                this.state = 789;
                this.match(jsoniqParser.Kby);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 792;
            this.orderByExpr();
            this.state = 797;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 793;
                this.match(jsoniqParser.Comma);
                this.state = 794;
                this.orderByExpr();
                }
                }
                this.state = 799;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByExpr(): OrderByExprContext {
        let localContext = new OrderByExprContext(this.context, this.state);
        this.enterRule(localContext, 116, jsoniqParser.RULE_orderByExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 800;
            localContext._ex = this.exprSingle();
            this.state = 803;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kascending:
                {
                this.state = 801;
                this.match(jsoniqParser.Kascending);
                }
                break;
            case jsoniqParser.Kdescending:
                {
                this.state = 802;
                localContext._desc = this.match(jsoniqParser.Kdescending);
                }
                break;
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Comma:
                break;
            default:
                break;
            }
            this.state = 810;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 805;
                this.match(jsoniqParser.Kempty);
                this.state = 808;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.Kgreatest:
                    {
                    this.state = 806;
                    localContext._gr = this.match(jsoniqParser.Kgreatest);
                    }
                    break;
                case jsoniqParser.Kleast:
                    {
                    this.state = 807;
                    localContext._ls = this.match(jsoniqParser.Kleast);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
            }

            this.state = 814;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 58) {
                {
                this.state = 812;
                this.match(jsoniqParser.Kcollation);
                this.state = 813;
                localContext._uril = this.uriLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public countClause(): CountClauseContext {
        let localContext = new CountClauseContext(this.context, this.state);
        this.enterRule(localContext, 118, jsoniqParser.RULE_countClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 816;
            this.match(jsoniqParser.Kcount);
            this.state = 817;
            this.varRef();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public quantifiedExpr(): QuantifiedExprContext {
        let localContext = new QuantifiedExprContext(this.context, this.state);
        this.enterRule(localContext, 120, jsoniqParser.RULE_quantifiedExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 821;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Ksome:
                {
                this.state = 819;
                localContext._so = this.match(jsoniqParser.Ksome);
                }
                break;
            case jsoniqParser.Kevery:
                {
                this.state = 820;
                localContext._ev = this.match(jsoniqParser.Kevery);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 823;
            localContext._quantifiedExprVar = this.quantifiedExprVar();
            localContext._vars.push(localContext._quantifiedExprVar!);
            this.state = 828;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 824;
                this.match(jsoniqParser.Comma);
                this.state = 825;
                localContext._quantifiedExprVar = this.quantifiedExprVar();
                localContext._vars.push(localContext._quantifiedExprVar!);
                }
                }
                this.state = 830;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 831;
            this.match(jsoniqParser.Ksatisfies);
            this.state = 832;
            this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public quantifiedExprVar(): QuantifiedExprVarContext {
        let localContext = new QuantifiedExprVarContext(this.context, this.state);
        this.enterRule(localContext, 122, jsoniqParser.RULE_quantifiedExprVar);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 834;
            this.varRef();
            this.state = 837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 835;
                this.match(jsoniqParser.Kas);
                this.state = 836;
                this.sequenceType();
                }
            }

            this.state = 839;
            this.match(jsoniqParser.Kin);
            this.state = 840;
            this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchExpr(): SwitchExprContext {
        let localContext = new SwitchExprContext(this.context, this.state);
        this.enterRule(localContext, 124, jsoniqParser.RULE_switchExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 842;
            this.match(jsoniqParser.Kswitch);
            this.state = 843;
            this.match(jsoniqParser.BracketOpen);
            this.state = 844;
            localContext._cond = this.expr();
            this.state = 845;
            this.match(jsoniqParser.BracketClose);
            this.state = 847;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 846;
                localContext._switchCaseClause = this.switchCaseClause();
                localContext._cases.push(localContext._switchCaseClause!);
                }
                }
                this.state = 849;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 851;
            this.match(jsoniqParser.Kdefault);
            this.state = 852;
            this.match(jsoniqParser.Kreturn);
            this.state = 853;
            localContext._def = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchCaseClause(): SwitchCaseClauseContext {
        let localContext = new SwitchCaseClauseContext(this.context, this.state);
        this.enterRule(localContext, 126, jsoniqParser.RULE_switchCaseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 857;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 855;
                this.match(jsoniqParser.Kcase);
                this.state = 856;
                localContext._exprSingle = this.exprSingle();
                localContext._cond.push(localContext._exprSingle!);
                }
                }
                this.state = 859;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 861;
            this.match(jsoniqParser.Kreturn);
            this.state = 862;
            localContext._ret = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSwitchExpr(): TypeSwitchExprContext {
        let localContext = new TypeSwitchExprContext(this.context, this.state);
        this.enterRule(localContext, 128, jsoniqParser.RULE_typeSwitchExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 864;
            this.match(jsoniqParser.Ktypeswitch);
            this.state = 865;
            this.match(jsoniqParser.BracketOpen);
            this.state = 866;
            localContext._cond = this.expr();
            this.state = 867;
            this.match(jsoniqParser.BracketClose);
            this.state = 869;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 868;
                localContext._caseClause = this.caseClause();
                localContext._cses.push(localContext._caseClause!);
                }
                }
                this.state = 871;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 62);
            this.state = 873;
            this.match(jsoniqParser.Kdefault);
            this.state = 875;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 874;
                localContext._var_ref = this.varRef();
                }
            }

            this.state = 877;
            this.match(jsoniqParser.Kreturn);
            this.state = 878;
            localContext._def = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseClause(): CaseClauseContext {
        let localContext = new CaseClauseContext(this.context, this.state);
        this.enterRule(localContext, 130, jsoniqParser.RULE_caseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 880;
            this.match(jsoniqParser.Kcase);
            this.state = 884;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 881;
                localContext._var_ref = this.varRef();
                this.state = 882;
                this.match(jsoniqParser.Kas);
                }
            }

            this.state = 886;
            localContext._sequenceType = this.sequenceType();
            localContext._union.push(localContext._sequenceType!);
            this.state = 891;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 887;
                this.match(jsoniqParser.T__4);
                this.state = 888;
                localContext._sequenceType = this.sequenceType();
                localContext._union.push(localContext._sequenceType!);
                }
                }
                this.state = 893;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 894;
            this.match(jsoniqParser.Kreturn);
            this.state = 895;
            localContext._ret = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpr(): IfExprContext {
        let localContext = new IfExprContext(this.context, this.state);
        this.enterRule(localContext, 132, jsoniqParser.RULE_ifExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 897;
            this.match(jsoniqParser.Kif);
            this.state = 898;
            this.match(jsoniqParser.BracketOpen);
            this.state = 899;
            localContext._test_condition = this.expr();
            this.state = 900;
            this.match(jsoniqParser.BracketClose);
            this.state = 901;
            this.match(jsoniqParser.Kthen);
            this.state = 902;
            localContext._branch = this.exprSingle();
            this.state = 903;
            this.match(jsoniqParser.Kelse);
            this.state = 904;
            localContext._else_branch = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryCatchExpr(): TryCatchExprContext {
        let localContext = new TryCatchExprContext(this.context, this.state);
        this.enterRule(localContext, 134, jsoniqParser.RULE_tryCatchExpr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 906;
            this.match(jsoniqParser.Ktry);
            this.state = 907;
            this.match(jsoniqParser.BraceOpen);
            this.state = 908;
            localContext._try_expression = this.expr();
            this.state = 909;
            this.match(jsoniqParser.BraceClose);
            this.state = 911;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 910;
                    localContext._catchClause = this.catchClause();
                    localContext._catches.push(localContext._catchClause!);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 913;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClause(): CatchClauseContext {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 136, jsoniqParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 915;
            this.match(jsoniqParser.Kcatch);
            this.state = 918;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Times:
                {
                this.state = 916;
                localContext._s114 = this.match(jsoniqParser.Times);
                localContext._jokers.push(localContext._s114!);
                }
                break;
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.NCName:
                {
                this.state = 917;
                localContext._qname = this.qname();
                localContext._errors.push(localContext._qname!);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 927;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 920;
                this.match(jsoniqParser.T__4);
                this.state = 923;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case jsoniqParser.Times:
                    {
                    this.state = 921;
                    localContext._s114 = this.match(jsoniqParser.Times);
                    localContext._jokers.push(localContext._s114!);
                    }
                    break;
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.NullLiteral:
                case jsoniqParser.NCName:
                    {
                    this.state = 922;
                    localContext._qname = this.qname();
                    localContext._errors.push(localContext._qname!);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                }
                this.state = 929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 930;
            this.match(jsoniqParser.BraceOpen);
            this.state = 931;
            localContext._catch_expression = this.expr();
            this.state = 932;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orExpr(): OrExprContext {
        let localContext = new OrExprContext(this.context, this.state);
        this.enterRule(localContext, 138, jsoniqParser.RULE_orExpr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 934;
            localContext._main_expr = this.andExpr();
            this.state = 939;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 935;
                    this.match(jsoniqParser.Kor);
                    this.state = 936;
                    localContext._andExpr = this.andExpr();
                    localContext._rhs.push(localContext._andExpr!);
                    }
                    }
                }
                this.state = 941;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public andExpr(): AndExprContext {
        let localContext = new AndExprContext(this.context, this.state);
        this.enterRule(localContext, 140, jsoniqParser.RULE_andExpr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 942;
            localContext._main_expr = this.notExpr();
            this.state = 947;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 943;
                    this.match(jsoniqParser.Kand);
                    this.state = 944;
                    localContext._notExpr = this.notExpr();
                    localContext._rhs.push(localContext._notExpr!);
                    }
                    }
                }
                this.state = 949;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public notExpr(): NotExprContext {
        let localContext = new NotExprContext(this.context, this.state);
        this.enterRule(localContext, 142, jsoniqParser.RULE_notExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 951;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
            case 1:
                {
                this.state = 950;
                localContext._Knot = this.match(jsoniqParser.Knot);
                localContext._op.push(localContext._Knot!);
                }
                break;
            }
            this.state = 953;
            localContext._main_expr = this.comparisonExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonExpr(): ComparisonExprContext {
        let localContext = new ComparisonExprContext(this.context, this.state);
        this.enterRule(localContext, 144, jsoniqParser.RULE_comparisonExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 955;
            localContext._main_expr = this.stringConcatExpr();
            this.state = 958;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 63) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 125) !== 0)) {
                {
                this.state = 956;
                localContext.__tset1997 = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 63) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 125) !== 0))) {
                    localContext.__tset1997 = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                localContext._op.push(localContext.__tset1997!);
                this.state = 957;
                localContext._stringConcatExpr = this.stringConcatExpr();
                localContext._rhs.push(localContext._stringConcatExpr!);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringConcatExpr(): StringConcatExprContext {
        let localContext = new StringConcatExprContext(this.context, this.state);
        this.enterRule(localContext, 146, jsoniqParser.RULE_stringConcatExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 960;
            localContext._main_expr = this.rangeExpr();
            this.state = 965;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 129) {
                {
                {
                this.state = 961;
                this.match(jsoniqParser.Or);
                this.state = 962;
                localContext._rangeExpr = this.rangeExpr();
                localContext._rhs.push(localContext._rangeExpr!);
                }
                }
                this.state = 967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeExpr(): RangeExprContext {
        let localContext = new RangeExprContext(this.context, this.state);
        this.enterRule(localContext, 148, jsoniqParser.RULE_rangeExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 968;
            localContext._main_expr = this.additiveExpr();
            this.state = 971;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context) ) {
            case 1:
                {
                this.state = 969;
                this.match(jsoniqParser.Kto);
                this.state = 970;
                localContext._additiveExpr = this.additiveExpr();
                localContext._rhs.push(localContext._additiveExpr!);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public additiveExpr(): AdditiveExprContext {
        let localContext = new AdditiveExprContext(this.context, this.state);
        this.enterRule(localContext, 150, jsoniqParser.RULE_additiveExpr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 973;
            localContext._main_expr = this.multiplicativeExpr();
            this.state = 978;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 91, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 974;
                    localContext.__tset2115 = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 112 || _la === 113)) {
                        localContext.__tset2115 = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    localContext._op.push(localContext.__tset2115!);
                    this.state = 975;
                    localContext._multiplicativeExpr = this.multiplicativeExpr();
                    localContext._rhs.push(localContext._multiplicativeExpr!);
                    }
                    }
                }
                this.state = 980;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 91, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiplicativeExpr(): MultiplicativeExprContext {
        let localContext = new MultiplicativeExprContext(this.context, this.state);
        this.enterRule(localContext, 152, jsoniqParser.RULE_multiplicativeExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 981;
            localContext._main_expr = this.instanceOfExpr();
            this.state = 986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0) || _la === 114) {
                {
                {
                this.state = 982;
                localContext.__tset2148 = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0) || _la === 114)) {
                    localContext.__tset2148 = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                localContext._op.push(localContext.__tset2148!);
                this.state = 983;
                localContext._instanceOfExpr = this.instanceOfExpr();
                localContext._rhs.push(localContext._instanceOfExpr!);
                }
                }
                this.state = 988;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public instanceOfExpr(): InstanceOfExprContext {
        let localContext = new InstanceOfExprContext(this.context, this.state);
        this.enterRule(localContext, 154, jsoniqParser.RULE_instanceOfExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 989;
            localContext._main_expr = this.isStaticallyExpr();
            this.state = 993;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 990;
                this.match(jsoniqParser.Kinstance);
                this.state = 991;
                this.match(jsoniqParser.Kof);
                this.state = 992;
                localContext._seq = this.sequenceType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public isStaticallyExpr(): IsStaticallyExprContext {
        let localContext = new IsStaticallyExprContext(this.context, this.state);
        this.enterRule(localContext, 156, jsoniqParser.RULE_isStaticallyExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 995;
            localContext._main_expr = this.treatExpr();
            this.state = 999;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                {
                this.state = 996;
                this.match(jsoniqParser.Kis);
                this.state = 997;
                this.match(jsoniqParser.Kstatically);
                this.state = 998;
                localContext._seq = this.sequenceType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public treatExpr(): TreatExprContext {
        let localContext = new TreatExprContext(this.context, this.state);
        this.enterRule(localContext, 158, jsoniqParser.RULE_treatExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1001;
            localContext._main_expr = this.castableExpr();
            this.state = 1005;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                {
                this.state = 1002;
                this.match(jsoniqParser.Ktreat);
                this.state = 1003;
                this.match(jsoniqParser.Kas);
                this.state = 1004;
                localContext._seq = this.sequenceType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public castableExpr(): CastableExprContext {
        let localContext = new CastableExprContext(this.context, this.state);
        this.enterRule(localContext, 160, jsoniqParser.RULE_castableExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1007;
            localContext._main_expr = this.castExpr();
            this.state = 1011;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
            case 1:
                {
                this.state = 1008;
                this.match(jsoniqParser.Kcastable);
                this.state = 1009;
                this.match(jsoniqParser.Kas);
                this.state = 1010;
                localContext._single = this.singleType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public castExpr(): CastExprContext {
        let localContext = new CastExprContext(this.context, this.state);
        this.enterRule(localContext, 162, jsoniqParser.RULE_castExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1013;
            localContext._main_expr = this.arrowExpr();
            this.state = 1017;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                {
                this.state = 1014;
                this.match(jsoniqParser.Kcast);
                this.state = 1015;
                this.match(jsoniqParser.Kas);
                this.state = 1016;
                localContext._single = this.singleType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrowExpr(): ArrowExprContext {
        let localContext = new ArrowExprContext(this.context, this.state);
        this.enterRule(localContext, 164, jsoniqParser.RULE_arrowExpr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1019;
            localContext._main_expr = this.unaryExpr();
            this.state = 1028;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    {
                    this.state = 1020;
                    this.match(jsoniqParser.Equal);
                    this.state = 1021;
                    this.match(jsoniqParser.Greater);
                    }
                    this.state = 1023;
                    localContext._arrowFunctionSpecifier = this.arrowFunctionSpecifier();
                    localContext._function_.push(localContext._arrowFunctionSpecifier!);
                    this.state = 1024;
                    localContext._argumentList = this.argumentList();
                    localContext._arguments.push(localContext._argumentList!);
                    }
                    }
                }
                this.state = 1030;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrowFunctionSpecifier(): ArrowFunctionSpecifierContext {
        let localContext = new ArrowFunctionSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 166, jsoniqParser.RULE_arrowFunctionSpecifier);
        try {
            this.state = 1034;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.NCName:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1031;
                this.qname();
                }
                break;
            case jsoniqParser.ReferenceSymbol:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1032;
                this.varRef();
                }
                break;
            case jsoniqParser.BracketOpen:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1033;
                this.parenthesizedExpr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unaryExpr(): UnaryExprContext {
        let localContext = new UnaryExprContext(this.context, this.state);
        this.enterRule(localContext, 168, jsoniqParser.RULE_unaryExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1039;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 112 || _la === 113) {
                {
                {
                this.state = 1036;
                localContext.__tset2345 = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 112 || _la === 113)) {
                    localContext.__tset2345 = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                localContext._op.push(localContext.__tset2345!);
                }
                }
                this.state = 1041;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1042;
            localContext._main_expr = this.valueExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueExpr(): ValueExprContext {
        let localContext = new ValueExprContext(this.context, this.state);
        this.enterRule(localContext, 170, jsoniqParser.RULE_valueExpr);
        try {
            this.state = 1047;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1044;
                localContext._simpleMap_expr = this.simpleMapExpr();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1045;
                localContext._validate_expr = this.validateExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1046;
                localContext._annotate_expr = this.annotateExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public validateExpr(): ValidateExprContext {
        let localContext = new ValidateExprContext(this.context, this.state);
        this.enterRule(localContext, 172, jsoniqParser.RULE_validateExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.match(jsoniqParser.Kvalidate);
            this.state = 1050;
            this.match(jsoniqParser.Ktype);
            this.state = 1051;
            this.sequenceType();
            this.state = 1052;
            this.match(jsoniqParser.BraceOpen);
            this.state = 1053;
            this.expr();
            this.state = 1054;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotateExpr(): AnnotateExprContext {
        let localContext = new AnnotateExprContext(this.context, this.state);
        this.enterRule(localContext, 174, jsoniqParser.RULE_annotateExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1056;
            this.match(jsoniqParser.Kannotate);
            this.state = 1057;
            this.match(jsoniqParser.Ktype);
            this.state = 1058;
            this.sequenceType();
            this.state = 1059;
            this.match(jsoniqParser.BraceOpen);
            this.state = 1060;
            this.expr();
            this.state = 1061;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleMapExpr(): SimpleMapExprContext {
        let localContext = new SimpleMapExprContext(this.context, this.state);
        this.enterRule(localContext, 176, jsoniqParser.RULE_simpleMapExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1063;
            localContext._main_expr = this.postFixExpr();
            this.state = 1068;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 127) {
                {
                {
                this.state = 1064;
                this.match(jsoniqParser.Exclamation);
                this.state = 1065;
                localContext._postFixExpr = this.postFixExpr();
                localContext._map_expr.push(localContext._postFixExpr!);
                }
                }
                this.state = 1070;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public postFixExpr(): PostFixExprContext {
        let localContext = new PostFixExprContext(this.context, this.state);
        this.enterRule(localContext, 178, jsoniqParser.RULE_postFixExpr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1071;
            localContext._main_expr = this.primaryExpr();
            this.state = 1079;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 1077;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
                    case 1:
                        {
                        this.state = 1072;
                        this.arrayLookup();
                        }
                        break;
                    case 2:
                        {
                        this.state = 1073;
                        this.predicate();
                        }
                        break;
                    case 3:
                        {
                        this.state = 1074;
                        this.objectLookup();
                        }
                        break;
                    case 4:
                        {
                        this.state = 1075;
                        this.arrayUnboxing();
                        }
                        break;
                    case 5:
                        {
                        this.state = 1076;
                        this.argumentList();
                        }
                        break;
                    }
                    }
                }
                this.state = 1081;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayLookup(): ArrayLookupContext {
        let localContext = new ArrayLookupContext(this.context, this.state);
        this.enterRule(localContext, 180, jsoniqParser.RULE_arrayLookup);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1082;
            this.match(jsoniqParser.SquareBracketOpen);
            this.state = 1083;
            this.match(jsoniqParser.SquareBracketOpen);
            this.state = 1084;
            this.expr();
            this.state = 1085;
            this.match(jsoniqParser.SquareBracketClose);
            this.state = 1086;
            this.match(jsoniqParser.SquareBracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayUnboxing(): ArrayUnboxingContext {
        let localContext = new ArrayUnboxingContext(this.context, this.state);
        this.enterRule(localContext, 182, jsoniqParser.RULE_arrayUnboxing);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1088;
            this.match(jsoniqParser.SquareBracketOpen);
            this.state = 1089;
            this.match(jsoniqParser.SquareBracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicate(): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 184, jsoniqParser.RULE_predicate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1091;
            this.match(jsoniqParser.SquareBracketOpen);
            this.state = 1092;
            this.expr();
            this.state = 1093;
            this.match(jsoniqParser.SquareBracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectLookup(): ObjectLookupContext {
        let localContext = new ObjectLookupContext(this.context, this.state);
        this.enterRule(localContext, 186, jsoniqParser.RULE_objectLookup);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1095;
            this.match(jsoniqParser.Dot);
            this.state = 1102;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
                {
                this.state = 1096;
                localContext._kw = this.keyWords();
                }
                break;
            case jsoniqParser.STRING:
                {
                this.state = 1097;
                localContext._lt = this.stringLiteral();
                }
                break;
            case jsoniqParser.NCName:
                {
                this.state = 1098;
                localContext._nc = this.match(jsoniqParser.NCName);
                }
                break;
            case jsoniqParser.BracketOpen:
                {
                this.state = 1099;
                localContext._pe = this.parenthesizedExpr();
                }
                break;
            case jsoniqParser.ReferenceSymbol:
                {
                this.state = 1100;
                localContext._vr = this.varRef();
                }
                break;
            case jsoniqParser.ReferenceContextSymbol:
                {
                this.state = 1101;
                localContext._ci = this.contextItemExpr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryExpr(): PrimaryExprContext {
        let localContext = new PrimaryExprContext(this.context, this.state);
        this.enterRule(localContext, 188, jsoniqParser.RULE_primaryExpr);
        try {
            this.state = 1119;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1104;
                this.match(jsoniqParser.NullLiteral);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1105;
                this.match(jsoniqParser.Ktrue);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1106;
                this.match(jsoniqParser.Kfalse);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1107;
                this.match(jsoniqParser.Literal);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1108;
                this.stringLiteral();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1109;
                this.varRef();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1110;
                this.parenthesizedExpr();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1111;
                this.contextItemExpr();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1112;
                this.objectConstructor();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1113;
                this.functionCall();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1114;
                this.orderedExpr();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1115;
                this.unorderedExpr();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1116;
                this.arrayConstructor();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1117;
                this.functionItemExpr();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1118;
                this.blockExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockExpr(): BlockExprContext {
        let localContext = new BlockExprContext(this.context, this.state);
        this.enterRule(localContext, 190, jsoniqParser.RULE_blockExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1121;
            this.match(jsoniqParser.BraceOpen);
            this.state = 1122;
            this.statementsAndExpr();
            this.state = 1123;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varRef(): VarRefContext {
        let localContext = new VarRefContext(this.context, this.state);
        this.enterRule(localContext, 192, jsoniqParser.RULE_varRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1125;
            this.match(jsoniqParser.ReferenceSymbol);
            this.state = 1126;
            localContext._var_name = this.qname();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parenthesizedExpr(): ParenthesizedExprContext {
        let localContext = new ParenthesizedExprContext(this.context, this.state);
        this.enterRule(localContext, 194, jsoniqParser.RULE_parenthesizedExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1128;
            this.match(jsoniqParser.BracketOpen);
            this.state = 1130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7 || _la === 22 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 11980287) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131) !== 0)) {
                {
                this.state = 1129;
                this.expr();
                }
            }

            this.state = 1132;
            this.match(jsoniqParser.BracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contextItemExpr(): ContextItemExprContext {
        let localContext = new ContextItemExprContext(this.context, this.state);
        this.enterRule(localContext, 196, jsoniqParser.RULE_contextItemExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1134;
            this.match(jsoniqParser.ReferenceContextSymbol);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderedExpr(): OrderedExprContext {
        let localContext = new OrderedExprContext(this.context, this.state);
        this.enterRule(localContext, 198, jsoniqParser.RULE_orderedExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1136;
            this.match(jsoniqParser.T__6);
            this.state = 1137;
            this.match(jsoniqParser.BraceOpen);
            this.state = 1138;
            this.expr();
            this.state = 1139;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unorderedExpr(): UnorderedExprContext {
        let localContext = new UnorderedExprContext(this.context, this.state);
        this.enterRule(localContext, 200, jsoniqParser.RULE_unorderedExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1141;
            this.match(jsoniqParser.Kunordered);
            this.state = 1142;
            this.match(jsoniqParser.BraceOpen);
            this.state = 1143;
            this.expr();
            this.state = 1144;
            this.match(jsoniqParser.BraceClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 202, jsoniqParser.RULE_functionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1146;
            localContext._fn_name = this.qname();
            this.state = 1147;
            this.argumentList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 204, jsoniqParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1149;
            this.match(jsoniqParser.BracketOpen);
            this.state = 1156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 22 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 11980799) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131) !== 0)) {
                {
                {
                this.state = 1150;
                localContext._argument = this.argument();
                localContext._args.push(localContext._argument!);
                this.state = 1152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 135) {
                    {
                    this.state = 1151;
                    this.match(jsoniqParser.Comma);
                    }
                }

                }
                }
                this.state = 1158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1159;
            this.match(jsoniqParser.BracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 206, jsoniqParser.RULE_argument);
        try {
            this.state = 1163;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.T__6:
            case jsoniqParser.T__21:
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.STRING:
            case jsoniqParser.Plus:
            case jsoniqParser.Minus:
            case jsoniqParser.ReferenceSymbol:
            case jsoniqParser.BracketOpen:
            case jsoniqParser.ReferenceContextSymbol:
            case jsoniqParser.BraceOpen:
            case jsoniqParser.BraceOr:
            case jsoniqParser.SquareBracketOpen:
            case jsoniqParser.AnnotationSymbol:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.Literal:
            case jsoniqParser.NCName:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1161;
                this.exprSingle();
                }
                break;
            case jsoniqParser.ArgumentPlaceholder:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1162;
                this.match(jsoniqParser.ArgumentPlaceholder);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionItemExpr(): FunctionItemExprContext {
        let localContext = new FunctionItemExprContext(this.context, this.state);
        this.enterRule(localContext, 208, jsoniqParser.RULE_functionItemExpr);
        try {
            this.state = 1167;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.NCName:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1165;
                this.namedFunctionRef();
                }
                break;
            case jsoniqParser.T__21:
            case jsoniqParser.AnnotationSymbol:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1166;
                this.inlineFunctionExpr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedFunctionRef(): NamedFunctionRefContext {
        let localContext = new NamedFunctionRefContext(this.context, this.state);
        this.enterRule(localContext, 210, jsoniqParser.RULE_namedFunctionRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1169;
            localContext._fn_name = this.qname();
            this.state = 1170;
            this.match(jsoniqParser.T__35);
            this.state = 1171;
            localContext._arity = this.match(jsoniqParser.Literal);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineFunctionExpr(): InlineFunctionExprContext {
        let localContext = new InlineFunctionExprContext(this.context, this.state);
        this.enterRule(localContext, 212, jsoniqParser.RULE_inlineFunctionExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1173;
            this.annotations();
            this.state = 1174;
            this.match(jsoniqParser.T__21);
            this.state = 1175;
            this.match(jsoniqParser.BracketOpen);
            this.state = 1177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1176;
                this.paramList();
                }
            }

            this.state = 1179;
            this.match(jsoniqParser.BracketClose);
            this.state = 1182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 1180;
                this.match(jsoniqParser.Kas);
                this.state = 1181;
                localContext._return_type = this.sequenceType();
                }
            }

            {
            this.state = 1184;
            this.match(jsoniqParser.BraceOpen);
            {
            this.state = 1185;
            localContext._fn_body = this.statementsAndOptionalExpr();
            }
            this.state = 1186;
            this.match(jsoniqParser.BraceClose);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertExpr(): InsertExprContext {
        let localContext = new InsertExprContext(this.context, this.state);
        this.enterRule(localContext, 214, jsoniqParser.RULE_insertExpr);
        let _la: number;
        try {
            this.state = 1211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1188;
                this.match(jsoniqParser.Kinsert);
                this.state = 1189;
                this.match(jsoniqParser.Kjson);
                this.state = 1190;
                localContext._to_insert_expr = this.exprSingle();
                this.state = 1191;
                this.match(jsoniqParser.Kinto);
                this.state = 1192;
                localContext._main_expr = this.exprSingle();
                this.state = 1196;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
                case 1:
                    {
                    this.state = 1193;
                    this.match(jsoniqParser.Kat);
                    this.state = 1194;
                    this.match(jsoniqParser.Kposition);
                    this.state = 1195;
                    localContext._pos_expr = this.exprSingle();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1198;
                this.match(jsoniqParser.Kinsert);
                this.state = 1199;
                this.match(jsoniqParser.Kjson);
                this.state = 1200;
                this.pairConstructor();
                this.state = 1205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 135) {
                    {
                    {
                    this.state = 1201;
                    this.match(jsoniqParser.Comma);
                    this.state = 1202;
                    this.pairConstructor();
                    }
                    }
                    this.state = 1207;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1208;
                this.match(jsoniqParser.Kinto);
                this.state = 1209;
                localContext._main_expr = this.exprSingle();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteExpr(): DeleteExprContext {
        let localContext = new DeleteExprContext(this.context, this.state);
        this.enterRule(localContext, 216, jsoniqParser.RULE_deleteExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1213;
            this.match(jsoniqParser.Kdelete);
            this.state = 1214;
            this.match(jsoniqParser.Kjson);
            this.state = 1215;
            this.updateLocator();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameExpr(): RenameExprContext {
        let localContext = new RenameExprContext(this.context, this.state);
        this.enterRule(localContext, 218, jsoniqParser.RULE_renameExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1217;
            this.match(jsoniqParser.Krename);
            this.state = 1218;
            this.match(jsoniqParser.Kjson);
            this.state = 1219;
            this.updateLocator();
            this.state = 1220;
            this.match(jsoniqParser.Kas);
            this.state = 1221;
            localContext._name_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public replaceExpr(): ReplaceExprContext {
        let localContext = new ReplaceExprContext(this.context, this.state);
        this.enterRule(localContext, 220, jsoniqParser.RULE_replaceExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1223;
            this.match(jsoniqParser.Kreplace);
            this.state = 1224;
            this.match(jsoniqParser.Kjson);
            this.state = 1225;
            this.match(jsoniqParser.Kvalue);
            this.state = 1226;
            this.match(jsoniqParser.Kof);
            this.state = 1227;
            this.updateLocator();
            this.state = 1228;
            this.match(jsoniqParser.Kwith);
            this.state = 1229;
            localContext._replacer_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transformExpr(): TransformExprContext {
        let localContext = new TransformExprContext(this.context, this.state);
        this.enterRule(localContext, 222, jsoniqParser.RULE_transformExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1231;
            this.match(jsoniqParser.Kcopy);
            this.state = 1232;
            this.match(jsoniqParser.Kjson);
            this.state = 1233;
            this.copyDecl();
            this.state = 1238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 135) {
                {
                {
                this.state = 1234;
                this.match(jsoniqParser.Comma);
                this.state = 1235;
                this.copyDecl();
                }
                }
                this.state = 1240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1241;
            this.match(jsoniqParser.Kmodify);
            this.state = 1242;
            localContext._mod_expr = this.exprSingle();
            this.state = 1243;
            this.match(jsoniqParser.Kreturn);
            this.state = 1244;
            localContext._ret_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public appendExpr(): AppendExprContext {
        let localContext = new AppendExprContext(this.context, this.state);
        this.enterRule(localContext, 224, jsoniqParser.RULE_appendExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1246;
            this.match(jsoniqParser.Kappend);
            this.state = 1247;
            this.match(jsoniqParser.Kjson);
            this.state = 1248;
            localContext._to_append_expr = this.exprSingle();
            this.state = 1249;
            this.match(jsoniqParser.Kinto);
            this.state = 1250;
            localContext._array_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateLocator(): UpdateLocatorContext {
        let localContext = new UpdateLocatorContext(this.context, this.state);
        this.enterRule(localContext, 226, jsoniqParser.RULE_updateLocator);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1252;
            localContext._main_expr = this.primaryExpr();
            this.state = 1255;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    this.state = 1255;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case jsoniqParser.SquareBracketOpen:
                        {
                        this.state = 1253;
                        this.arrayLookup();
                        }
                        break;
                    case jsoniqParser.Dot:
                        {
                        this.state = 1254;
                        this.objectLookup();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1257;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 119, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public copyDecl(): CopyDeclContext {
        let localContext = new CopyDeclContext(this.context, this.state);
        this.enterRule(localContext, 228, jsoniqParser.RULE_copyDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1259;
            localContext._var_ref = this.varRef();
            this.state = 1260;
            this.match(jsoniqParser.T__3);
            this.state = 1261;
            localContext._src_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sequenceType(): SequenceTypeContext {
        let localContext = new SequenceTypeContext(this.context, this.state);
        this.enterRule(localContext, 230, jsoniqParser.RULE_sequenceType);
        try {
            this.state = 1271;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.BracketOpen:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1263;
                this.match(jsoniqParser.BracketOpen);
                this.state = 1264;
                this.match(jsoniqParser.BracketClose);
                }
                break;
            case jsoniqParser.T__21:
            case jsoniqParser.Kfor:
            case jsoniqParser.Klet:
            case jsoniqParser.Kwhere:
            case jsoniqParser.Kgroup:
            case jsoniqParser.Kby:
            case jsoniqParser.Korder:
            case jsoniqParser.Kreturn:
            case jsoniqParser.Kif:
            case jsoniqParser.Kin:
            case jsoniqParser.Kas:
            case jsoniqParser.Kat:
            case jsoniqParser.Kallowing:
            case jsoniqParser.Kempty:
            case jsoniqParser.Kcount:
            case jsoniqParser.Kstable:
            case jsoniqParser.Kascending:
            case jsoniqParser.Kdescending:
            case jsoniqParser.Ksome:
            case jsoniqParser.Kevery:
            case jsoniqParser.Ksatisfies:
            case jsoniqParser.Kcollation:
            case jsoniqParser.Kgreatest:
            case jsoniqParser.Kleast:
            case jsoniqParser.Kswitch:
            case jsoniqParser.Kcase:
            case jsoniqParser.Ktry:
            case jsoniqParser.Kcatch:
            case jsoniqParser.Kdefault:
            case jsoniqParser.Kthen:
            case jsoniqParser.Kelse:
            case jsoniqParser.Ktypeswitch:
            case jsoniqParser.Kor:
            case jsoniqParser.Kand:
            case jsoniqParser.Knot:
            case jsoniqParser.Kto:
            case jsoniqParser.Kinstance:
            case jsoniqParser.Kof:
            case jsoniqParser.Kstatically:
            case jsoniqParser.Kis:
            case jsoniqParser.Ktreat:
            case jsoniqParser.Kcast:
            case jsoniqParser.Kcastable:
            case jsoniqParser.Kversion:
            case jsoniqParser.Kjsoniq:
            case jsoniqParser.Kunordered:
            case jsoniqParser.Ktrue:
            case jsoniqParser.Kfalse:
            case jsoniqParser.Ktype:
            case jsoniqParser.Kvalidate:
            case jsoniqParser.Kannotate:
            case jsoniqParser.Kdeclare:
            case jsoniqParser.Kcontext:
            case jsoniqParser.Kitem:
            case jsoniqParser.Kvariable:
            case jsoniqParser.Kinsert:
            case jsoniqParser.Kdelete:
            case jsoniqParser.Krename:
            case jsoniqParser.Kreplace:
            case jsoniqParser.Kcopy:
            case jsoniqParser.Kmodify:
            case jsoniqParser.Kappend:
            case jsoniqParser.Kinto:
            case jsoniqParser.Kvalue:
            case jsoniqParser.Kjson:
            case jsoniqParser.Kwith:
            case jsoniqParser.Kposition:
            case jsoniqParser.Kbreak:
            case jsoniqParser.Kloop:
            case jsoniqParser.Kcontinue:
            case jsoniqParser.Kexit:
            case jsoniqParser.Kreturning:
            case jsoniqParser.Kwhile:
            case jsoniqParser.NullLiteral:
            case jsoniqParser.NCName:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1265;
                localContext._item = this.itemType();
                this.state = 1269;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                case 1:
                    {
                    this.state = 1266;
                    localContext._s111 = this.match(jsoniqParser.ArgumentPlaceholder);
                    localContext._question.push(localContext._s111!);
                    }
                    break;
                case 2:
                    {
                    this.state = 1267;
                    localContext._s114 = this.match(jsoniqParser.Times);
                    localContext._star.push(localContext._s114!);
                    }
                    break;
                case 3:
                    {
                    this.state = 1268;
                    localContext._s112 = this.match(jsoniqParser.Plus);
                    localContext._plus.push(localContext._s112!);
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectConstructor(): ObjectConstructorContext {
        let localContext = new ObjectConstructorContext(this.context, this.state);
        this.enterRule(localContext, 232, jsoniqParser.RULE_objectConstructor);
        let _la: number;
        try {
            this.state = 1289;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case jsoniqParser.BraceOpen:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1273;
                this.match(jsoniqParser.BraceOpen);
                this.state = 1282;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7 || _la === 22 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 11980287) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131) !== 0)) {
                    {
                    this.state = 1274;
                    this.pairConstructor();
                    this.state = 1279;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 135) {
                        {
                        {
                        this.state = 1275;
                        this.match(jsoniqParser.Comma);
                        this.state = 1276;
                        this.pairConstructor();
                        }
                        }
                        this.state = 1281;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1284;
                this.match(jsoniqParser.BraceClose);
                }
                break;
            case jsoniqParser.BraceOr:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1285;
                localContext._s122 = this.match(jsoniqParser.BraceOr);
                localContext._merge_operator.push(localContext._s122!);
                this.state = 1286;
                this.expr();
                this.state = 1287;
                this.match(jsoniqParser.T__36);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public itemType(): ItemTypeContext {
        let localContext = new ItemTypeContext(this.context, this.state);
        this.enterRule(localContext, 234, jsoniqParser.RULE_itemType);
        try {
            this.state = 1294;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1291;
                this.qname();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1292;
                this.match(jsoniqParser.NullLiteral);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1293;
                this.functionTest();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTest(): FunctionTestContext {
        let localContext = new FunctionTestContext(this.context, this.state);
        this.enterRule(localContext, 236, jsoniqParser.RULE_functionTest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1298;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                {
                this.state = 1296;
                this.anyFunctionTest();
                }
                break;
            case 2:
                {
                this.state = 1297;
                this.typedFunctionTest();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public anyFunctionTest(): AnyFunctionTestContext {
        let localContext = new AnyFunctionTestContext(this.context, this.state);
        this.enterRule(localContext, 238, jsoniqParser.RULE_anyFunctionTest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1300;
            this.match(jsoniqParser.T__21);
            this.state = 1301;
            this.match(jsoniqParser.BracketOpen);
            this.state = 1302;
            this.match(jsoniqParser.Times);
            this.state = 1303;
            this.match(jsoniqParser.BracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typedFunctionTest(): TypedFunctionTestContext {
        let localContext = new TypedFunctionTestContext(this.context, this.state);
        this.enterRule(localContext, 240, jsoniqParser.RULE_typedFunctionTest);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1305;
            this.match(jsoniqParser.T__21);
            this.state = 1306;
            this.match(jsoniqParser.BracketOpen);
            this.state = 1315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 4294901761) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 2164260863) !== 0) || _la === 136 || _la === 143) {
                {
                this.state = 1307;
                localContext._sequenceType = this.sequenceType();
                localContext._st.push(localContext._sequenceType!);
                this.state = 1312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 135) {
                    {
                    {
                    this.state = 1308;
                    this.match(jsoniqParser.Comma);
                    this.state = 1309;
                    localContext._sequenceType = this.sequenceType();
                    localContext._st.push(localContext._sequenceType!);
                    }
                    }
                    this.state = 1314;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1317;
            this.match(jsoniqParser.BracketClose);
            this.state = 1318;
            this.match(jsoniqParser.Kas);
            this.state = 1319;
            localContext._rt = this.sequenceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleType(): SingleTypeContext {
        let localContext = new SingleTypeContext(this.context, this.state);
        this.enterRule(localContext, 242, jsoniqParser.RULE_singleType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1321;
            localContext._item = this.itemType();
            this.state = 1323;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
            case 1:
                {
                this.state = 1322;
                localContext._s111 = this.match(jsoniqParser.ArgumentPlaceholder);
                localContext._question.push(localContext._s111!);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pairConstructor(): PairConstructorContext {
        let localContext = new PairConstructorContext(this.context, this.state);
        this.enterRule(localContext, 244, jsoniqParser.RULE_pairConstructor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
            case 1:
                {
                this.state = 1325;
                localContext._lhs = this.exprSingle();
                }
                break;
            case 2:
                {
                this.state = 1326;
                localContext._name = this.match(jsoniqParser.NCName);
                }
                break;
            }
            this.state = 1329;
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 111)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1330;
            localContext._rhs = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayConstructor(): ArrayConstructorContext {
        let localContext = new ArrayConstructorContext(this.context, this.state);
        this.enterRule(localContext, 246, jsoniqParser.RULE_arrayConstructor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1332;
            this.match(jsoniqParser.SquareBracketOpen);
            this.state = 1334;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7 || _la === 22 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 11980287) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131) !== 0)) {
                {
                this.state = 1333;
                this.expr();
                }
            }

            this.state = 1336;
            this.match(jsoniqParser.SquareBracketClose);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uriLiteral(): UriLiteralContext {
        let localContext = new UriLiteralContext(this.context, this.state);
        this.enterRule(localContext, 248, jsoniqParser.RULE_uriLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1338;
            this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 250, jsoniqParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1340;
            this.match(jsoniqParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyWords(): KeyWordsContext {
        let localContext = new KeyWordsContext(this.context, this.state);
        this.enterRule(localContext, 252, jsoniqParser.RULE_keyWords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1342;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294967295) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 255) !== 0) || _la === 136)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,145,1345,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,263,8,1,1,1,1,1,
        3,1,267,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
        1,4,3,4,283,8,4,1,4,1,4,5,4,287,8,4,10,4,12,4,290,9,4,1,4,1,4,1,
        4,5,4,295,8,4,10,4,12,4,298,9,4,1,5,1,5,1,6,5,6,303,8,6,10,6,12,
        6,306,9,6,1,7,1,7,1,7,1,8,1,8,3,8,313,8,8,1,9,1,9,1,9,1,9,1,9,1,
        9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,328,8,9,1,10,1,10,1,10,1,11,1,
        11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
        14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,3,16,358,8,
        16,1,16,1,16,1,16,1,16,1,16,1,16,5,16,366,8,16,10,16,12,16,369,9,
        16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
        18,1,18,1,18,1,18,1,18,4,18,388,8,18,11,18,12,18,389,1,18,1,18,1,
        18,1,18,1,19,1,19,4,19,398,8,19,11,19,12,19,399,1,19,1,19,1,19,1,
        20,1,20,1,20,4,20,408,8,20,11,20,12,20,409,1,21,1,21,1,21,3,21,415,
        8,21,1,21,1,21,1,21,3,21,420,8,21,5,21,422,8,21,10,21,12,21,425,
        9,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,4,22,434,8,22,11,22,12,22,
        435,1,22,1,22,3,22,440,8,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,3,
        23,449,8,23,1,23,1,23,1,23,5,23,454,8,23,10,23,12,23,457,9,23,1,
        23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,5,24,468,8,24,10,24,12,
        24,471,9,24,1,24,3,24,474,8,24,1,25,5,25,477,8,25,10,25,12,25,480,
        9,25,1,26,1,26,1,26,1,26,1,26,5,26,487,8,26,10,26,12,26,490,9,26,
        1,26,1,26,1,27,1,27,1,27,3,27,497,8,27,1,27,1,27,3,27,501,8,27,1,
        28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,513,8,29,1,
        30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,525,8,31,1,
        32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,
        34,1,34,1,35,1,35,1,35,1,35,1,35,3,35,547,8,35,1,35,1,35,1,35,1,
        35,5,35,553,8,35,10,35,12,35,556,9,35,1,36,1,36,3,36,560,8,36,1,
        36,3,36,563,8,36,1,36,1,36,3,36,567,8,36,1,37,1,37,1,38,1,38,1,38,
        1,38,1,38,3,38,576,8,38,1,38,1,38,1,38,1,38,1,38,5,38,583,8,38,10,
        38,12,38,586,9,38,3,38,588,8,38,1,39,1,39,1,39,1,39,1,39,1,39,3,
        39,596,8,39,1,39,1,39,1,39,1,39,1,39,3,39,603,8,39,3,39,605,8,39,
        1,40,1,40,1,40,1,40,1,40,3,40,612,8,40,1,40,1,40,1,40,1,40,1,40,
        3,40,619,8,40,3,40,621,8,40,1,41,1,41,1,41,1,41,1,41,1,41,3,41,629,
        8,41,1,41,1,41,1,41,3,41,634,8,41,1,41,1,41,1,41,1,41,1,41,3,41,
        641,8,41,1,42,1,42,1,42,1,42,1,42,3,42,648,8,42,1,42,1,42,1,43,1,
        43,1,43,1,43,1,43,1,43,3,43,658,8,43,1,44,1,44,1,44,5,44,663,8,44,
        10,44,12,44,666,9,44,1,45,1,45,1,45,1,45,3,45,672,8,45,1,46,1,46,
        1,46,5,46,677,8,46,10,46,12,46,680,9,46,1,47,1,47,1,47,1,47,1,47,
        1,47,3,47,688,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,
        698,8,48,1,49,1,49,3,49,702,8,49,1,49,1,49,1,49,1,49,1,49,1,49,5,
        49,710,8,49,10,49,12,49,713,9,49,1,49,1,49,1,49,1,50,1,50,1,50,1,
        50,5,50,722,8,50,10,50,12,50,725,9,50,1,51,1,51,1,51,3,51,730,8,
        51,1,51,1,51,3,51,734,8,51,1,51,1,51,3,51,738,8,51,1,51,1,51,1,51,
        1,52,1,52,1,52,1,52,5,52,747,8,52,10,52,12,52,750,9,52,1,53,1,53,
        1,53,3,53,755,8,53,1,53,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,
        1,55,1,55,5,55,768,8,55,10,55,12,55,771,9,55,1,56,1,56,1,56,3,56,
        776,8,56,1,56,1,56,3,56,780,8,56,1,56,1,56,3,56,784,8,56,1,57,1,
        57,1,57,1,57,1,57,3,57,791,8,57,1,57,1,57,1,57,5,57,796,8,57,10,
        57,12,57,799,9,57,1,58,1,58,1,58,3,58,804,8,58,1,58,1,58,1,58,3,
        58,809,8,58,3,58,811,8,58,1,58,1,58,3,58,815,8,58,1,59,1,59,1,59,
        1,60,1,60,3,60,822,8,60,1,60,1,60,1,60,5,60,827,8,60,10,60,12,60,
        830,9,60,1,60,1,60,1,60,1,61,1,61,1,61,3,61,838,8,61,1,61,1,61,1,
        61,1,62,1,62,1,62,1,62,1,62,4,62,848,8,62,11,62,12,62,849,1,62,1,
        62,1,62,1,62,1,63,1,63,4,63,858,8,63,11,63,12,63,859,1,63,1,63,1,
        63,1,64,1,64,1,64,1,64,1,64,4,64,870,8,64,11,64,12,64,871,1,64,1,
        64,3,64,876,8,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,3,65,885,8,65,
        1,65,1,65,1,65,5,65,890,8,65,10,65,12,65,893,9,65,1,65,1,65,1,65,
        1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,
        1,67,4,67,912,8,67,11,67,12,67,913,1,68,1,68,1,68,3,68,919,8,68,
        1,68,1,68,1,68,3,68,924,8,68,5,68,926,8,68,10,68,12,68,929,9,68,
        1,68,1,68,1,68,1,68,1,69,1,69,1,69,5,69,938,8,69,10,69,12,69,941,
        9,69,1,70,1,70,1,70,5,70,946,8,70,10,70,12,70,949,9,70,1,71,3,71,
        952,8,71,1,71,1,71,1,72,1,72,1,72,3,72,959,8,72,1,73,1,73,1,73,5,
        73,964,8,73,10,73,12,73,967,9,73,1,74,1,74,1,74,3,74,972,8,74,1,
        75,1,75,1,75,5,75,977,8,75,10,75,12,75,980,9,75,1,76,1,76,1,76,5,
        76,985,8,76,10,76,12,76,988,9,76,1,77,1,77,1,77,1,77,3,77,994,8,
        77,1,78,1,78,1,78,1,78,3,78,1000,8,78,1,79,1,79,1,79,1,79,3,79,1006,
        8,79,1,80,1,80,1,80,1,80,3,80,1012,8,80,1,81,1,81,1,81,1,81,3,81,
        1018,8,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,5,82,1027,8,82,10,82,
        12,82,1030,9,82,1,83,1,83,1,83,3,83,1035,8,83,1,84,5,84,1038,8,84,
        10,84,12,84,1041,9,84,1,84,1,84,1,85,1,85,1,85,3,85,1048,8,85,1,
        86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,
        87,1,88,1,88,1,88,5,88,1067,8,88,10,88,12,88,1070,9,88,1,89,1,89,
        1,89,1,89,1,89,1,89,5,89,1078,8,89,10,89,12,89,1081,9,89,1,90,1,
        90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,
        93,1,93,1,93,1,93,1,93,1,93,3,93,1103,8,93,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1120,8,
        94,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,97,1,97,3,97,1131,8,97,1,
        97,1,97,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
        1,100,1,101,1,101,1,101,1,102,1,102,1,102,3,102,1153,8,102,5,102,
        1155,8,102,10,102,12,102,1158,9,102,1,102,1,102,1,103,1,103,3,103,
        1164,8,103,1,104,1,104,3,104,1168,8,104,1,105,1,105,1,105,1,105,
        1,106,1,106,1,106,1,106,3,106,1178,8,106,1,106,1,106,1,106,3,106,
        1183,8,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,3,107,1197,8,107,1,107,1,107,1,107,1,107,1,107,
        5,107,1204,8,107,10,107,12,107,1207,9,107,1,107,1,107,1,107,3,107,
        1212,8,107,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,
        1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
        1,111,1,111,1,111,5,111,1237,8,111,10,111,12,111,1240,9,111,1,111,
        1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,112,1,113,
        1,113,1,113,4,113,1256,8,113,11,113,12,113,1257,1,114,1,114,1,114,
        1,114,1,115,1,115,1,115,1,115,1,115,1,115,3,115,1270,8,115,3,115,
        1272,8,115,1,116,1,116,1,116,1,116,5,116,1278,8,116,10,116,12,116,
        1281,9,116,3,116,1283,8,116,1,116,1,116,1,116,1,116,1,116,3,116,
        1290,8,116,1,117,1,117,1,117,3,117,1295,8,117,1,118,1,118,3,118,
        1299,8,118,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,
        1,120,5,120,1311,8,120,10,120,12,120,1314,9,120,3,120,1316,8,120,
        1,120,1,120,1,120,1,120,1,121,1,121,3,121,1324,8,121,1,122,1,122,
        3,122,1328,8,122,1,122,1,122,1,122,1,123,1,123,3,123,1335,8,123,
        1,123,1,123,1,124,1,124,1,125,1,125,1,126,1,126,1,126,0,0,127,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
        92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
        158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
        190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,
        222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
        0,8,2,0,7,7,82,82,1,0,59,60,1,0,10,19,3,0,27,32,128,128,130,134,
        1,0,112,113,2,0,33,35,114,114,2,0,9,9,111,111,2,0,38,109,136,136,
        1410,0,254,1,0,0,0,2,262,1,0,0,0,4,268,1,0,0,0,6,271,1,0,0,0,8,288,
        1,0,0,0,10,299,1,0,0,0,12,304,1,0,0,0,14,307,1,0,0,0,16,310,1,0,
        0,0,18,327,1,0,0,0,20,329,1,0,0,0,22,332,1,0,0,0,24,338,1,0,0,0,
        26,342,1,0,0,0,28,346,1,0,0,0,30,350,1,0,0,0,32,357,1,0,0,0,34,373,
        1,0,0,0,36,382,1,0,0,0,38,397,1,0,0,0,40,404,1,0,0,0,42,411,1,0,
        0,0,44,428,1,0,0,0,46,444,1,0,0,0,48,461,1,0,0,0,50,478,1,0,0,0,
        52,481,1,0,0,0,54,493,1,0,0,0,56,502,1,0,0,0,58,512,1,0,0,0,60,514,
        1,0,0,0,62,524,1,0,0,0,64,526,1,0,0,0,66,531,1,0,0,0,68,535,1,0,
        0,0,70,541,1,0,0,0,72,562,1,0,0,0,74,568,1,0,0,0,76,570,1,0,0,0,
        78,589,1,0,0,0,80,606,1,0,0,0,82,622,1,0,0,0,84,642,1,0,0,0,86,657,
        1,0,0,0,88,659,1,0,0,0,90,667,1,0,0,0,92,673,1,0,0,0,94,687,1,0,
        0,0,96,697,1,0,0,0,98,701,1,0,0,0,100,717,1,0,0,0,102,726,1,0,0,
        0,104,742,1,0,0,0,106,751,1,0,0,0,108,759,1,0,0,0,110,762,1,0,0,
        0,112,772,1,0,0,0,114,790,1,0,0,0,116,800,1,0,0,0,118,816,1,0,0,
        0,120,821,1,0,0,0,122,834,1,0,0,0,124,842,1,0,0,0,126,857,1,0,0,
        0,128,864,1,0,0,0,130,880,1,0,0,0,132,897,1,0,0,0,134,906,1,0,0,
        0,136,915,1,0,0,0,138,934,1,0,0,0,140,942,1,0,0,0,142,951,1,0,0,
        0,144,955,1,0,0,0,146,960,1,0,0,0,148,968,1,0,0,0,150,973,1,0,0,
        0,152,981,1,0,0,0,154,989,1,0,0,0,156,995,1,0,0,0,158,1001,1,0,0,
        0,160,1007,1,0,0,0,162,1013,1,0,0,0,164,1019,1,0,0,0,166,1034,1,
        0,0,0,168,1039,1,0,0,0,170,1047,1,0,0,0,172,1049,1,0,0,0,174,1056,
        1,0,0,0,176,1063,1,0,0,0,178,1071,1,0,0,0,180,1082,1,0,0,0,182,1088,
        1,0,0,0,184,1091,1,0,0,0,186,1095,1,0,0,0,188,1119,1,0,0,0,190,1121,
        1,0,0,0,192,1125,1,0,0,0,194,1128,1,0,0,0,196,1134,1,0,0,0,198,1136,
        1,0,0,0,200,1141,1,0,0,0,202,1146,1,0,0,0,204,1149,1,0,0,0,206,1163,
        1,0,0,0,208,1167,1,0,0,0,210,1169,1,0,0,0,212,1173,1,0,0,0,214,1211,
        1,0,0,0,216,1213,1,0,0,0,218,1217,1,0,0,0,220,1223,1,0,0,0,222,1231,
        1,0,0,0,224,1246,1,0,0,0,226,1252,1,0,0,0,228,1259,1,0,0,0,230,1271,
        1,0,0,0,232,1289,1,0,0,0,234,1294,1,0,0,0,236,1298,1,0,0,0,238,1300,
        1,0,0,0,240,1305,1,0,0,0,242,1321,1,0,0,0,244,1327,1,0,0,0,246,1332,
        1,0,0,0,248,1338,1,0,0,0,250,1340,1,0,0,0,252,1342,1,0,0,0,254,255,
        3,2,1,0,255,256,5,0,0,1,256,1,1,0,0,0,257,258,5,81,0,0,258,259,5,
        80,0,0,259,260,3,250,125,0,260,261,5,1,0,0,261,263,1,0,0,0,262,257,
        1,0,0,0,262,263,1,0,0,0,263,266,1,0,0,0,264,267,3,6,3,0,265,267,
        3,4,2,0,266,264,1,0,0,0,266,265,1,0,0,0,267,3,1,0,0,0,268,269,3,
        8,4,0,269,270,3,10,5,0,270,5,1,0,0,0,271,272,5,2,0,0,272,273,5,3,
        0,0,273,274,5,143,0,0,274,275,5,128,0,0,275,276,3,248,124,0,276,
        277,5,1,0,0,277,278,3,8,4,0,278,7,1,0,0,0,279,283,3,58,29,0,280,
        283,3,60,30,0,281,283,3,76,38,0,282,279,1,0,0,0,282,280,1,0,0,0,
        282,281,1,0,0,0,283,284,1,0,0,0,284,285,5,1,0,0,285,287,1,0,0,0,
        286,282,1,0,0,0,287,290,1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,
        289,296,1,0,0,0,290,288,1,0,0,0,291,292,3,62,31,0,292,293,5,1,0,
        0,293,295,1,0,0,0,294,291,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,
        0,296,297,1,0,0,0,297,9,1,0,0,0,298,296,1,0,0,0,299,300,3,16,8,0,
        300,11,1,0,0,0,301,303,3,18,9,0,302,301,1,0,0,0,303,306,1,0,0,0,
        304,302,1,0,0,0,304,305,1,0,0,0,305,13,1,0,0,0,306,304,1,0,0,0,307,
        308,3,12,6,0,308,309,3,92,46,0,309,15,1,0,0,0,310,312,3,12,6,0,311,
        313,3,92,46,0,312,311,1,0,0,0,312,313,1,0,0,0,313,17,1,0,0,0,314,
        328,3,20,10,0,315,328,3,22,11,0,316,328,3,24,12,0,317,328,3,26,13,
        0,318,328,3,28,14,0,319,328,3,30,15,0,320,328,3,32,16,0,321,328,
        3,34,17,0,322,328,3,36,18,0,323,328,3,40,20,0,324,328,3,44,22,0,
        325,328,3,52,26,0,326,328,3,56,28,0,327,314,1,0,0,0,327,315,1,0,
        0,0,327,316,1,0,0,0,327,317,1,0,0,0,327,318,1,0,0,0,327,319,1,0,
        0,0,327,320,1,0,0,0,327,321,1,0,0,0,327,322,1,0,0,0,327,323,1,0,
        0,0,327,324,1,0,0,0,327,325,1,0,0,0,327,326,1,0,0,0,328,19,1,0,0,
        0,329,330,3,96,48,0,330,331,5,1,0,0,331,21,1,0,0,0,332,333,5,116,
        0,0,333,334,3,72,36,0,334,335,5,4,0,0,335,336,3,94,47,0,336,337,
        5,1,0,0,337,23,1,0,0,0,338,339,5,120,0,0,339,340,3,12,6,0,340,341,
        5,121,0,0,341,25,1,0,0,0,342,343,5,104,0,0,343,344,5,105,0,0,344,
        345,5,1,0,0,345,27,1,0,0,0,346,347,5,106,0,0,347,348,5,105,0,0,348,
        349,5,1,0,0,349,29,1,0,0,0,350,351,5,107,0,0,351,352,5,108,0,0,352,
        353,3,94,47,0,353,354,5,1,0,0,354,31,1,0,0,0,355,358,3,100,50,0,
        356,358,3,104,52,0,357,355,1,0,0,0,357,356,1,0,0,0,358,367,1,0,0,
        0,359,366,3,100,50,0,360,366,3,104,52,0,361,366,3,108,54,0,362,366,
        3,110,55,0,363,366,3,114,57,0,364,366,3,118,59,0,365,359,1,0,0,0,
        365,360,1,0,0,0,365,361,1,0,0,0,365,362,1,0,0,0,365,363,1,0,0,0,
        365,364,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,
        368,370,1,0,0,0,369,367,1,0,0,0,370,371,5,44,0,0,371,372,3,18,9,
        0,372,33,1,0,0,0,373,374,5,45,0,0,374,375,5,117,0,0,375,376,3,92,
        46,0,376,377,5,118,0,0,377,378,5,66,0,0,378,379,3,18,9,0,379,380,
        5,67,0,0,380,381,3,18,9,0,381,35,1,0,0,0,382,383,5,61,0,0,383,384,
        5,117,0,0,384,385,3,92,46,0,385,387,5,118,0,0,386,388,3,38,19,0,
        387,386,1,0,0,0,388,389,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,
        390,391,1,0,0,0,391,392,5,65,0,0,392,393,5,44,0,0,393,394,3,18,9,
        0,394,37,1,0,0,0,395,396,5,62,0,0,396,398,3,94,47,0,397,395,1,0,
        0,0,398,399,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,401,1,0,
        0,0,401,402,5,44,0,0,402,403,3,18,9,0,403,39,1,0,0,0,404,405,5,63,
        0,0,405,407,3,24,12,0,406,408,3,42,21,0,407,406,1,0,0,0,408,409,
        1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,41,1,0,0,0,411,414,5,
        64,0,0,412,415,5,114,0,0,413,415,3,72,36,0,414,412,1,0,0,0,414,413,
        1,0,0,0,415,423,1,0,0,0,416,419,5,5,0,0,417,420,5,114,0,0,418,420,
        3,72,36,0,419,417,1,0,0,0,419,418,1,0,0,0,420,422,1,0,0,0,421,416,
        1,0,0,0,422,425,1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,426,
        1,0,0,0,425,423,1,0,0,0,426,427,3,24,12,0,427,43,1,0,0,0,428,429,
        5,68,0,0,429,430,5,117,0,0,430,431,3,92,46,0,431,433,5,118,0,0,432,
        434,3,46,23,0,433,432,1,0,0,0,434,435,1,0,0,0,435,433,1,0,0,0,435,
        436,1,0,0,0,436,437,1,0,0,0,437,439,5,65,0,0,438,440,3,192,96,0,
        439,438,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,442,5,44,0,0,
        442,443,3,18,9,0,443,45,1,0,0,0,444,448,5,62,0,0,445,446,3,192,96,
        0,446,447,5,47,0,0,447,449,1,0,0,0,448,445,1,0,0,0,448,449,1,0,0,
        0,449,450,1,0,0,0,450,455,3,230,115,0,451,452,5,5,0,0,452,454,3,
        230,115,0,453,451,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,
        1,0,0,0,456,458,1,0,0,0,457,455,1,0,0,0,458,459,5,44,0,0,459,460,
        3,18,9,0,460,47,1,0,0,0,461,462,5,125,0,0,462,473,3,72,36,0,463,
        464,5,117,0,0,464,469,5,137,0,0,465,466,5,135,0,0,466,468,5,137,
        0,0,467,465,1,0,0,0,468,471,1,0,0,0,469,467,1,0,0,0,469,470,1,0,
        0,0,470,472,1,0,0,0,471,469,1,0,0,0,472,474,5,118,0,0,473,463,1,
        0,0,0,473,474,1,0,0,0,474,49,1,0,0,0,475,477,3,48,24,0,476,475,1,
        0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,479,1,0,0,0,479,51,1,0,
        0,0,480,478,1,0,0,0,481,482,3,50,25,0,482,483,5,91,0,0,483,488,3,
        54,27,0,484,485,5,135,0,0,485,487,3,54,27,0,486,484,1,0,0,0,487,
        490,1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,491,1,0,0,0,490,
        488,1,0,0,0,491,492,5,1,0,0,492,53,1,0,0,0,493,496,3,192,96,0,494,
        495,5,47,0,0,495,497,3,230,115,0,496,494,1,0,0,0,496,497,1,0,0,0,
        497,500,1,0,0,0,498,499,5,4,0,0,499,501,3,94,47,0,500,498,1,0,0,
        0,500,501,1,0,0,0,501,55,1,0,0,0,502,503,5,109,0,0,503,504,5,117,
        0,0,504,505,3,92,46,0,505,506,5,118,0,0,506,507,3,18,9,0,507,57,
        1,0,0,0,508,513,3,64,32,0,509,513,3,66,33,0,510,513,3,68,34,0,511,
        513,3,70,35,0,512,508,1,0,0,0,512,509,1,0,0,0,512,510,1,0,0,0,512,
        511,1,0,0,0,513,59,1,0,0,0,514,515,5,88,0,0,515,516,5,3,0,0,516,
        517,5,143,0,0,517,518,5,128,0,0,518,519,3,248,124,0,519,61,1,0,0,
        0,520,525,3,82,41,0,521,525,3,78,39,0,522,525,3,84,42,0,523,525,
        3,80,40,0,524,520,1,0,0,0,524,521,1,0,0,0,524,522,1,0,0,0,524,523,
        1,0,0,0,525,63,1,0,0,0,526,527,5,88,0,0,527,528,5,65,0,0,528,529,
        5,58,0,0,529,530,3,248,124,0,530,65,1,0,0,0,531,532,5,88,0,0,532,
        533,5,6,0,0,533,534,7,0,0,0,534,67,1,0,0,0,535,536,5,88,0,0,536,
        537,5,65,0,0,537,538,5,43,0,0,538,539,5,50,0,0,539,540,7,1,0,0,540,
        69,1,0,0,0,541,546,5,88,0,0,542,543,5,8,0,0,543,547,3,72,36,0,544,
        545,5,65,0,0,545,547,5,8,0,0,546,542,1,0,0,0,546,544,1,0,0,0,547,
        554,1,0,0,0,548,549,3,74,37,0,549,550,5,128,0,0,550,551,3,250,125,
        0,551,553,1,0,0,0,552,548,1,0,0,0,553,556,1,0,0,0,554,552,1,0,0,
        0,554,555,1,0,0,0,555,71,1,0,0,0,556,554,1,0,0,0,557,560,5,143,0,
        0,558,560,3,252,126,0,559,557,1,0,0,0,559,558,1,0,0,0,560,561,1,
        0,0,0,561,563,5,9,0,0,562,559,1,0,0,0,562,563,1,0,0,0,563,566,1,
        0,0,0,564,567,5,143,0,0,565,567,3,252,126,0,566,564,1,0,0,0,566,
        565,1,0,0,0,567,73,1,0,0,0,568,569,7,2,0,0,569,75,1,0,0,0,570,571,
        5,20,0,0,571,575,5,2,0,0,572,573,5,3,0,0,573,574,5,143,0,0,574,576,
        5,128,0,0,575,572,1,0,0,0,575,576,1,0,0,0,576,577,1,0,0,0,577,587,
        3,248,124,0,578,579,5,48,0,0,579,584,3,248,124,0,580,581,5,135,0,
        0,581,583,3,248,124,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,1,
        0,0,0,584,585,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,587,578,1,
        0,0,0,587,588,1,0,0,0,588,77,1,0,0,0,589,590,5,88,0,0,590,591,3,
        50,25,0,591,592,5,91,0,0,592,595,3,192,96,0,593,594,5,47,0,0,594,
        596,3,230,115,0,595,593,1,0,0,0,595,596,1,0,0,0,596,604,1,0,0,0,
        597,598,5,4,0,0,598,605,3,94,47,0,599,602,5,21,0,0,600,601,5,4,0,
        0,601,603,3,94,47,0,602,600,1,0,0,0,602,603,1,0,0,0,603,605,1,0,
        0,0,604,597,1,0,0,0,604,599,1,0,0,0,605,79,1,0,0,0,606,607,5,88,
        0,0,607,608,5,89,0,0,608,611,5,90,0,0,609,610,5,47,0,0,610,612,3,
        230,115,0,611,609,1,0,0,0,611,612,1,0,0,0,612,620,1,0,0,0,613,614,
        5,4,0,0,614,621,3,94,47,0,615,618,5,21,0,0,616,617,5,4,0,0,617,619,
        3,94,47,0,618,616,1,0,0,0,618,619,1,0,0,0,619,621,1,0,0,0,620,613,
        1,0,0,0,620,615,1,0,0,0,621,81,1,0,0,0,622,623,5,88,0,0,623,624,
        3,50,25,0,624,625,5,22,0,0,625,626,3,72,36,0,626,628,5,117,0,0,627,
        629,3,88,44,0,628,627,1,0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,630,
        633,5,118,0,0,631,632,5,47,0,0,632,634,3,230,115,0,633,631,1,0,0,
        0,633,634,1,0,0,0,634,640,1,0,0,0,635,636,5,120,0,0,636,637,3,16,
        8,0,637,638,5,121,0,0,638,641,1,0,0,0,639,641,5,21,0,0,640,635,1,
        0,0,0,640,639,1,0,0,0,641,83,1,0,0,0,642,643,5,88,0,0,643,644,5,
        85,0,0,644,645,3,72,36,0,645,647,5,47,0,0,646,648,3,86,43,0,647,
        646,1,0,0,0,647,648,1,0,0,0,648,649,1,0,0,0,649,650,3,94,47,0,650,
        85,1,0,0,0,651,652,5,23,0,0,652,658,5,24,0,0,653,654,5,23,0,0,654,
        658,5,25,0,0,655,656,5,101,0,0,656,658,5,26,0,0,657,651,1,0,0,0,
        657,653,1,0,0,0,657,655,1,0,0,0,658,87,1,0,0,0,659,664,3,90,45,0,
        660,661,5,135,0,0,661,663,3,90,45,0,662,660,1,0,0,0,663,666,1,0,
        0,0,664,662,1,0,0,0,664,665,1,0,0,0,665,89,1,0,0,0,666,664,1,0,0,
        0,667,668,5,116,0,0,668,671,3,72,36,0,669,670,5,47,0,0,670,672,3,
        230,115,0,671,669,1,0,0,0,671,672,1,0,0,0,672,91,1,0,0,0,673,678,
        3,94,47,0,674,675,5,135,0,0,675,677,3,94,47,0,676,674,1,0,0,0,677,
        680,1,0,0,0,678,676,1,0,0,0,678,679,1,0,0,0,679,93,1,0,0,0,680,678,
        1,0,0,0,681,688,3,96,48,0,682,688,3,98,49,0,683,688,3,124,62,0,684,
        688,3,128,64,0,685,688,3,132,66,0,686,688,3,134,67,0,687,681,1,0,
        0,0,687,682,1,0,0,0,687,683,1,0,0,0,687,684,1,0,0,0,687,685,1,0,
        0,0,687,686,1,0,0,0,688,95,1,0,0,0,689,698,3,120,60,0,690,698,3,
        138,69,0,691,698,3,214,107,0,692,698,3,216,108,0,693,698,3,218,109,
        0,694,698,3,220,110,0,695,698,3,222,111,0,696,698,3,224,112,0,697,
        689,1,0,0,0,697,690,1,0,0,0,697,691,1,0,0,0,697,692,1,0,0,0,697,
        693,1,0,0,0,697,694,1,0,0,0,697,695,1,0,0,0,697,696,1,0,0,0,698,
        97,1,0,0,0,699,702,3,100,50,0,700,702,3,104,52,0,701,699,1,0,0,0,
        701,700,1,0,0,0,702,711,1,0,0,0,703,710,3,100,50,0,704,710,3,104,
        52,0,705,710,3,108,54,0,706,710,3,110,55,0,707,710,3,114,57,0,708,
        710,3,118,59,0,709,703,1,0,0,0,709,704,1,0,0,0,709,705,1,0,0,0,709,
        706,1,0,0,0,709,707,1,0,0,0,709,708,1,0,0,0,710,713,1,0,0,0,711,
        709,1,0,0,0,711,712,1,0,0,0,712,714,1,0,0,0,713,711,1,0,0,0,714,
        715,5,44,0,0,715,716,3,94,47,0,716,99,1,0,0,0,717,718,5,38,0,0,718,
        723,3,102,51,0,719,720,5,135,0,0,720,722,3,102,51,0,721,719,1,0,
        0,0,722,725,1,0,0,0,723,721,1,0,0,0,723,724,1,0,0,0,724,101,1,0,
        0,0,725,723,1,0,0,0,726,729,3,192,96,0,727,728,5,47,0,0,728,730,
        3,230,115,0,729,727,1,0,0,0,729,730,1,0,0,0,730,733,1,0,0,0,731,
        732,5,49,0,0,732,734,5,50,0,0,733,731,1,0,0,0,733,734,1,0,0,0,734,
        737,1,0,0,0,735,736,5,48,0,0,736,738,3,192,96,0,737,735,1,0,0,0,
        737,738,1,0,0,0,738,739,1,0,0,0,739,740,5,46,0,0,740,741,3,94,47,
        0,741,103,1,0,0,0,742,743,5,39,0,0,743,748,3,106,53,0,744,745,5,
        135,0,0,745,747,3,106,53,0,746,744,1,0,0,0,747,750,1,0,0,0,748,746,
        1,0,0,0,748,749,1,0,0,0,749,105,1,0,0,0,750,748,1,0,0,0,751,754,
        3,192,96,0,752,753,5,47,0,0,753,755,3,230,115,0,754,752,1,0,0,0,
        754,755,1,0,0,0,755,756,1,0,0,0,756,757,5,4,0,0,757,758,3,94,47,
        0,758,107,1,0,0,0,759,760,5,40,0,0,760,761,3,94,47,0,761,109,1,0,
        0,0,762,763,5,41,0,0,763,764,5,42,0,0,764,769,3,112,56,0,765,766,
        5,135,0,0,766,768,3,112,56,0,767,765,1,0,0,0,768,771,1,0,0,0,769,
        767,1,0,0,0,769,770,1,0,0,0,770,111,1,0,0,0,771,769,1,0,0,0,772,
        779,3,192,96,0,773,774,5,47,0,0,774,776,3,230,115,0,775,773,1,0,
        0,0,775,776,1,0,0,0,776,777,1,0,0,0,777,778,5,4,0,0,778,780,3,94,
        47,0,779,775,1,0,0,0,779,780,1,0,0,0,780,783,1,0,0,0,781,782,5,58,
        0,0,782,784,3,248,124,0,783,781,1,0,0,0,783,784,1,0,0,0,784,113,
        1,0,0,0,785,786,5,43,0,0,786,791,5,42,0,0,787,788,5,52,0,0,788,789,
        5,43,0,0,789,791,5,42,0,0,790,785,1,0,0,0,790,787,1,0,0,0,791,792,
        1,0,0,0,792,797,3,116,58,0,793,794,5,135,0,0,794,796,3,116,58,0,
        795,793,1,0,0,0,796,799,1,0,0,0,797,795,1,0,0,0,797,798,1,0,0,0,
        798,115,1,0,0,0,799,797,1,0,0,0,800,803,3,94,47,0,801,804,5,53,0,
        0,802,804,5,54,0,0,803,801,1,0,0,0,803,802,1,0,0,0,803,804,1,0,0,
        0,804,810,1,0,0,0,805,808,5,50,0,0,806,809,5,59,0,0,807,809,5,60,
        0,0,808,806,1,0,0,0,808,807,1,0,0,0,809,811,1,0,0,0,810,805,1,0,
        0,0,810,811,1,0,0,0,811,814,1,0,0,0,812,813,5,58,0,0,813,815,3,248,
        124,0,814,812,1,0,0,0,814,815,1,0,0,0,815,117,1,0,0,0,816,817,5,
        51,0,0,817,818,3,192,96,0,818,119,1,0,0,0,819,822,5,55,0,0,820,822,
        5,56,0,0,821,819,1,0,0,0,821,820,1,0,0,0,822,823,1,0,0,0,823,828,
        3,122,61,0,824,825,5,135,0,0,825,827,3,122,61,0,826,824,1,0,0,0,
        827,830,1,0,0,0,828,826,1,0,0,0,828,829,1,0,0,0,829,831,1,0,0,0,
        830,828,1,0,0,0,831,832,5,57,0,0,832,833,3,94,47,0,833,121,1,0,0,
        0,834,837,3,192,96,0,835,836,5,47,0,0,836,838,3,230,115,0,837,835,
        1,0,0,0,837,838,1,0,0,0,838,839,1,0,0,0,839,840,5,46,0,0,840,841,
        3,94,47,0,841,123,1,0,0,0,842,843,5,61,0,0,843,844,5,117,0,0,844,
        845,3,92,46,0,845,847,5,118,0,0,846,848,3,126,63,0,847,846,1,0,0,
        0,848,849,1,0,0,0,849,847,1,0,0,0,849,850,1,0,0,0,850,851,1,0,0,
        0,851,852,5,65,0,0,852,853,5,44,0,0,853,854,3,94,47,0,854,125,1,
        0,0,0,855,856,5,62,0,0,856,858,3,94,47,0,857,855,1,0,0,0,858,859,
        1,0,0,0,859,857,1,0,0,0,859,860,1,0,0,0,860,861,1,0,0,0,861,862,
        5,44,0,0,862,863,3,94,47,0,863,127,1,0,0,0,864,865,5,68,0,0,865,
        866,5,117,0,0,866,867,3,92,46,0,867,869,5,118,0,0,868,870,3,130,
        65,0,869,868,1,0,0,0,870,871,1,0,0,0,871,869,1,0,0,0,871,872,1,0,
        0,0,872,873,1,0,0,0,873,875,5,65,0,0,874,876,3,192,96,0,875,874,
        1,0,0,0,875,876,1,0,0,0,876,877,1,0,0,0,877,878,5,44,0,0,878,879,
        3,94,47,0,879,129,1,0,0,0,880,884,5,62,0,0,881,882,3,192,96,0,882,
        883,5,47,0,0,883,885,1,0,0,0,884,881,1,0,0,0,884,885,1,0,0,0,885,
        886,1,0,0,0,886,891,3,230,115,0,887,888,5,5,0,0,888,890,3,230,115,
        0,889,887,1,0,0,0,890,893,1,0,0,0,891,889,1,0,0,0,891,892,1,0,0,
        0,892,894,1,0,0,0,893,891,1,0,0,0,894,895,5,44,0,0,895,896,3,94,
        47,0,896,131,1,0,0,0,897,898,5,45,0,0,898,899,5,117,0,0,899,900,
        3,92,46,0,900,901,5,118,0,0,901,902,5,66,0,0,902,903,3,94,47,0,903,
        904,5,67,0,0,904,905,3,94,47,0,905,133,1,0,0,0,906,907,5,63,0,0,
        907,908,5,120,0,0,908,909,3,92,46,0,909,911,5,121,0,0,910,912,3,
        136,68,0,911,910,1,0,0,0,912,913,1,0,0,0,913,911,1,0,0,0,913,914,
        1,0,0,0,914,135,1,0,0,0,915,918,5,64,0,0,916,919,5,114,0,0,917,919,
        3,72,36,0,918,916,1,0,0,0,918,917,1,0,0,0,919,927,1,0,0,0,920,923,
        5,5,0,0,921,924,5,114,0,0,922,924,3,72,36,0,923,921,1,0,0,0,923,
        922,1,0,0,0,924,926,1,0,0,0,925,920,1,0,0,0,926,929,1,0,0,0,927,
        925,1,0,0,0,927,928,1,0,0,0,928,930,1,0,0,0,929,927,1,0,0,0,930,
        931,5,120,0,0,931,932,3,92,46,0,932,933,5,121,0,0,933,137,1,0,0,
        0,934,939,3,140,70,0,935,936,5,69,0,0,936,938,3,140,70,0,937,935,
        1,0,0,0,938,941,1,0,0,0,939,937,1,0,0,0,939,940,1,0,0,0,940,139,
        1,0,0,0,941,939,1,0,0,0,942,947,3,142,71,0,943,944,5,70,0,0,944,
        946,3,142,71,0,945,943,1,0,0,0,946,949,1,0,0,0,947,945,1,0,0,0,947,
        948,1,0,0,0,948,141,1,0,0,0,949,947,1,0,0,0,950,952,5,71,0,0,951,
        950,1,0,0,0,951,952,1,0,0,0,952,953,1,0,0,0,953,954,3,144,72,0,954,
        143,1,0,0,0,955,958,3,146,73,0,956,957,7,3,0,0,957,959,3,146,73,
        0,958,956,1,0,0,0,958,959,1,0,0,0,959,145,1,0,0,0,960,965,3,148,
        74,0,961,962,5,129,0,0,962,964,3,148,74,0,963,961,1,0,0,0,964,967,
        1,0,0,0,965,963,1,0,0,0,965,966,1,0,0,0,966,147,1,0,0,0,967,965,
        1,0,0,0,968,971,3,150,75,0,969,970,5,72,0,0,970,972,3,150,75,0,971,
        969,1,0,0,0,971,972,1,0,0,0,972,149,1,0,0,0,973,978,3,152,76,0,974,
        975,7,4,0,0,975,977,3,152,76,0,976,974,1,0,0,0,977,980,1,0,0,0,978,
        976,1,0,0,0,978,979,1,0,0,0,979,151,1,0,0,0,980,978,1,0,0,0,981,
        986,3,154,77,0,982,983,7,5,0,0,983,985,3,154,77,0,984,982,1,0,0,
        0,985,988,1,0,0,0,986,984,1,0,0,0,986,987,1,0,0,0,987,153,1,0,0,
        0,988,986,1,0,0,0,989,993,3,156,78,0,990,991,5,73,0,0,991,992,5,
        74,0,0,992,994,3,230,115,0,993,990,1,0,0,0,993,994,1,0,0,0,994,155,
        1,0,0,0,995,999,3,158,79,0,996,997,5,76,0,0,997,998,5,75,0,0,998,
        1000,3,230,115,0,999,996,1,0,0,0,999,1000,1,0,0,0,1000,157,1,0,0,
        0,1001,1005,3,160,80,0,1002,1003,5,77,0,0,1003,1004,5,47,0,0,1004,
        1006,3,230,115,0,1005,1002,1,0,0,0,1005,1006,1,0,0,0,1006,159,1,
        0,0,0,1007,1011,3,162,81,0,1008,1009,5,79,0,0,1009,1010,5,47,0,0,
        1010,1012,3,242,121,0,1011,1008,1,0,0,0,1011,1012,1,0,0,0,1012,161,
        1,0,0,0,1013,1017,3,164,82,0,1014,1015,5,78,0,0,1015,1016,5,47,0,
        0,1016,1018,3,242,121,0,1017,1014,1,0,0,0,1017,1018,1,0,0,0,1018,
        163,1,0,0,0,1019,1028,3,168,84,0,1020,1021,5,128,0,0,1021,1022,5,
        133,0,0,1022,1023,1,0,0,0,1023,1024,3,166,83,0,1024,1025,3,204,102,
        0,1025,1027,1,0,0,0,1026,1020,1,0,0,0,1027,1030,1,0,0,0,1028,1026,
        1,0,0,0,1028,1029,1,0,0,0,1029,165,1,0,0,0,1030,1028,1,0,0,0,1031,
        1035,3,72,36,0,1032,1035,3,192,96,0,1033,1035,3,194,97,0,1034,1031,
        1,0,0,0,1034,1032,1,0,0,0,1034,1033,1,0,0,0,1035,167,1,0,0,0,1036,
        1038,7,4,0,0,1037,1036,1,0,0,0,1038,1041,1,0,0,0,1039,1037,1,0,0,
        0,1039,1040,1,0,0,0,1040,1042,1,0,0,0,1041,1039,1,0,0,0,1042,1043,
        3,170,85,0,1043,169,1,0,0,0,1044,1048,3,176,88,0,1045,1048,3,172,
        86,0,1046,1048,3,174,87,0,1047,1044,1,0,0,0,1047,1045,1,0,0,0,1047,
        1046,1,0,0,0,1048,171,1,0,0,0,1049,1050,5,86,0,0,1050,1051,5,85,
        0,0,1051,1052,3,230,115,0,1052,1053,5,120,0,0,1053,1054,3,92,46,
        0,1054,1055,5,121,0,0,1055,173,1,0,0,0,1056,1057,5,87,0,0,1057,1058,
        5,85,0,0,1058,1059,3,230,115,0,1059,1060,5,120,0,0,1060,1061,3,92,
        46,0,1061,1062,5,121,0,0,1062,175,1,0,0,0,1063,1068,3,178,89,0,1064,
        1065,5,127,0,0,1065,1067,3,178,89,0,1066,1064,1,0,0,0,1067,1070,
        1,0,0,0,1068,1066,1,0,0,0,1068,1069,1,0,0,0,1069,177,1,0,0,0,1070,
        1068,1,0,0,0,1071,1079,3,188,94,0,1072,1078,3,180,90,0,1073,1078,
        3,184,92,0,1074,1078,3,186,93,0,1075,1078,3,182,91,0,1076,1078,3,
        204,102,0,1077,1072,1,0,0,0,1077,1073,1,0,0,0,1077,1074,1,0,0,0,
        1077,1075,1,0,0,0,1077,1076,1,0,0,0,1078,1081,1,0,0,0,1079,1077,
        1,0,0,0,1079,1080,1,0,0,0,1080,179,1,0,0,0,1081,1079,1,0,0,0,1082,
        1083,5,123,0,0,1083,1084,5,123,0,0,1084,1085,3,92,46,0,1085,1086,
        5,124,0,0,1086,1087,5,124,0,0,1087,181,1,0,0,0,1088,1089,5,123,0,
        0,1089,1090,5,124,0,0,1090,183,1,0,0,0,1091,1092,5,123,0,0,1092,
        1093,3,92,46,0,1093,1094,5,124,0,0,1094,185,1,0,0,0,1095,1102,5,
        126,0,0,1096,1103,3,252,126,0,1097,1103,3,250,125,0,1098,1103,5,
        143,0,0,1099,1103,3,194,97,0,1100,1103,3,192,96,0,1101,1103,3,196,
        98,0,1102,1096,1,0,0,0,1102,1097,1,0,0,0,1102,1098,1,0,0,0,1102,
        1099,1,0,0,0,1102,1100,1,0,0,0,1102,1101,1,0,0,0,1103,187,1,0,0,
        0,1104,1120,5,136,0,0,1105,1120,5,83,0,0,1106,1120,5,84,0,0,1107,
        1120,5,137,0,0,1108,1120,3,250,125,0,1109,1120,3,192,96,0,1110,1120,
        3,194,97,0,1111,1120,3,196,98,0,1112,1120,3,232,116,0,1113,1120,
        3,202,101,0,1114,1120,3,198,99,0,1115,1120,3,200,100,0,1116,1120,
        3,246,123,0,1117,1120,3,208,104,0,1118,1120,3,190,95,0,1119,1104,
        1,0,0,0,1119,1105,1,0,0,0,1119,1106,1,0,0,0,1119,1107,1,0,0,0,1119,
        1108,1,0,0,0,1119,1109,1,0,0,0,1119,1110,1,0,0,0,1119,1111,1,0,0,
        0,1119,1112,1,0,0,0,1119,1113,1,0,0,0,1119,1114,1,0,0,0,1119,1115,
        1,0,0,0,1119,1116,1,0,0,0,1119,1117,1,0,0,0,1119,1118,1,0,0,0,1120,
        189,1,0,0,0,1121,1122,5,120,0,0,1122,1123,3,14,7,0,1123,1124,5,121,
        0,0,1124,191,1,0,0,0,1125,1126,5,116,0,0,1126,1127,3,72,36,0,1127,
        193,1,0,0,0,1128,1130,5,117,0,0,1129,1131,3,92,46,0,1130,1129,1,
        0,0,0,1130,1131,1,0,0,0,1131,1132,1,0,0,0,1132,1133,5,118,0,0,1133,
        195,1,0,0,0,1134,1135,5,119,0,0,1135,197,1,0,0,0,1136,1137,5,7,0,
        0,1137,1138,5,120,0,0,1138,1139,3,92,46,0,1139,1140,5,121,0,0,1140,
        199,1,0,0,0,1141,1142,5,82,0,0,1142,1143,5,120,0,0,1143,1144,3,92,
        46,0,1144,1145,5,121,0,0,1145,201,1,0,0,0,1146,1147,3,72,36,0,1147,
        1148,3,204,102,0,1148,203,1,0,0,0,1149,1156,5,117,0,0,1150,1152,
        3,206,103,0,1151,1153,5,135,0,0,1152,1151,1,0,0,0,1152,1153,1,0,
        0,0,1153,1155,1,0,0,0,1154,1150,1,0,0,0,1155,1158,1,0,0,0,1156,1154,
        1,0,0,0,1156,1157,1,0,0,0,1157,1159,1,0,0,0,1158,1156,1,0,0,0,1159,
        1160,5,118,0,0,1160,205,1,0,0,0,1161,1164,3,94,47,0,1162,1164,5,
        111,0,0,1163,1161,1,0,0,0,1163,1162,1,0,0,0,1164,207,1,0,0,0,1165,
        1168,3,210,105,0,1166,1168,3,212,106,0,1167,1165,1,0,0,0,1167,1166,
        1,0,0,0,1168,209,1,0,0,0,1169,1170,3,72,36,0,1170,1171,5,36,0,0,
        1171,1172,5,137,0,0,1172,211,1,0,0,0,1173,1174,3,50,25,0,1174,1175,
        5,22,0,0,1175,1177,5,117,0,0,1176,1178,3,88,44,0,1177,1176,1,0,0,
        0,1177,1178,1,0,0,0,1178,1179,1,0,0,0,1179,1182,5,118,0,0,1180,1181,
        5,47,0,0,1181,1183,3,230,115,0,1182,1180,1,0,0,0,1182,1183,1,0,0,
        0,1183,1184,1,0,0,0,1184,1185,5,120,0,0,1185,1186,3,16,8,0,1186,
        1187,5,121,0,0,1187,213,1,0,0,0,1188,1189,5,92,0,0,1189,1190,5,101,
        0,0,1190,1191,3,94,47,0,1191,1192,5,99,0,0,1192,1196,3,94,47,0,1193,
        1194,5,48,0,0,1194,1195,5,103,0,0,1195,1197,3,94,47,0,1196,1193,
        1,0,0,0,1196,1197,1,0,0,0,1197,1212,1,0,0,0,1198,1199,5,92,0,0,1199,
        1200,5,101,0,0,1200,1205,3,244,122,0,1201,1202,5,135,0,0,1202,1204,
        3,244,122,0,1203,1201,1,0,0,0,1204,1207,1,0,0,0,1205,1203,1,0,0,
        0,1205,1206,1,0,0,0,1206,1208,1,0,0,0,1207,1205,1,0,0,0,1208,1209,
        5,99,0,0,1209,1210,3,94,47,0,1210,1212,1,0,0,0,1211,1188,1,0,0,0,
        1211,1198,1,0,0,0,1212,215,1,0,0,0,1213,1214,5,93,0,0,1214,1215,
        5,101,0,0,1215,1216,3,226,113,0,1216,217,1,0,0,0,1217,1218,5,94,
        0,0,1218,1219,5,101,0,0,1219,1220,3,226,113,0,1220,1221,5,47,0,0,
        1221,1222,3,94,47,0,1222,219,1,0,0,0,1223,1224,5,95,0,0,1224,1225,
        5,101,0,0,1225,1226,5,100,0,0,1226,1227,5,74,0,0,1227,1228,3,226,
        113,0,1228,1229,5,102,0,0,1229,1230,3,94,47,0,1230,221,1,0,0,0,1231,
        1232,5,96,0,0,1232,1233,5,101,0,0,1233,1238,3,228,114,0,1234,1235,
        5,135,0,0,1235,1237,3,228,114,0,1236,1234,1,0,0,0,1237,1240,1,0,
        0,0,1238,1236,1,0,0,0,1238,1239,1,0,0,0,1239,1241,1,0,0,0,1240,1238,
        1,0,0,0,1241,1242,5,97,0,0,1242,1243,3,94,47,0,1243,1244,5,44,0,
        0,1244,1245,3,94,47,0,1245,223,1,0,0,0,1246,1247,5,98,0,0,1247,1248,
        5,101,0,0,1248,1249,3,94,47,0,1249,1250,5,99,0,0,1250,1251,3,94,
        47,0,1251,225,1,0,0,0,1252,1255,3,188,94,0,1253,1256,3,180,90,0,
        1254,1256,3,186,93,0,1255,1253,1,0,0,0,1255,1254,1,0,0,0,1256,1257,
        1,0,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,227,1,0,0,0,1259,
        1260,3,192,96,0,1260,1261,5,4,0,0,1261,1262,3,94,47,0,1262,229,1,
        0,0,0,1263,1264,5,117,0,0,1264,1272,5,118,0,0,1265,1269,3,234,117,
        0,1266,1270,5,111,0,0,1267,1270,5,114,0,0,1268,1270,5,112,0,0,1269,
        1266,1,0,0,0,1269,1267,1,0,0,0,1269,1268,1,0,0,0,1269,1270,1,0,0,
        0,1270,1272,1,0,0,0,1271,1263,1,0,0,0,1271,1265,1,0,0,0,1272,231,
        1,0,0,0,1273,1282,5,120,0,0,1274,1279,3,244,122,0,1275,1276,5,135,
        0,0,1276,1278,3,244,122,0,1277,1275,1,0,0,0,1278,1281,1,0,0,0,1279,
        1277,1,0,0,0,1279,1280,1,0,0,0,1280,1283,1,0,0,0,1281,1279,1,0,0,
        0,1282,1274,1,0,0,0,1282,1283,1,0,0,0,1283,1284,1,0,0,0,1284,1290,
        5,121,0,0,1285,1286,5,122,0,0,1286,1287,3,92,46,0,1287,1288,5,37,
        0,0,1288,1290,1,0,0,0,1289,1273,1,0,0,0,1289,1285,1,0,0,0,1290,233,
        1,0,0,0,1291,1295,3,72,36,0,1292,1295,5,136,0,0,1293,1295,3,236,
        118,0,1294,1291,1,0,0,0,1294,1292,1,0,0,0,1294,1293,1,0,0,0,1295,
        235,1,0,0,0,1296,1299,3,238,119,0,1297,1299,3,240,120,0,1298,1296,
        1,0,0,0,1298,1297,1,0,0,0,1299,237,1,0,0,0,1300,1301,5,22,0,0,1301,
        1302,5,117,0,0,1302,1303,5,114,0,0,1303,1304,5,118,0,0,1304,239,
        1,0,0,0,1305,1306,5,22,0,0,1306,1315,5,117,0,0,1307,1312,3,230,115,
        0,1308,1309,5,135,0,0,1309,1311,3,230,115,0,1310,1308,1,0,0,0,1311,
        1314,1,0,0,0,1312,1310,1,0,0,0,1312,1313,1,0,0,0,1313,1316,1,0,0,
        0,1314,1312,1,0,0,0,1315,1307,1,0,0,0,1315,1316,1,0,0,0,1316,1317,
        1,0,0,0,1317,1318,5,118,0,0,1318,1319,5,47,0,0,1319,1320,3,230,115,
        0,1320,241,1,0,0,0,1321,1323,3,234,117,0,1322,1324,5,111,0,0,1323,
        1322,1,0,0,0,1323,1324,1,0,0,0,1324,243,1,0,0,0,1325,1328,3,94,47,
        0,1326,1328,5,143,0,0,1327,1325,1,0,0,0,1327,1326,1,0,0,0,1328,1329,
        1,0,0,0,1329,1330,7,6,0,0,1330,1331,3,94,47,0,1331,245,1,0,0,0,1332,
        1334,5,123,0,0,1333,1335,3,92,46,0,1334,1333,1,0,0,0,1334,1335,1,
        0,0,0,1335,1336,1,0,0,0,1336,1337,5,124,0,0,1337,247,1,0,0,0,1338,
        1339,3,250,125,0,1339,249,1,0,0,0,1340,1341,5,110,0,0,1341,251,1,
        0,0,0,1342,1343,7,7,0,0,1343,253,1,0,0,0,132,262,266,282,288,296,
        304,312,327,357,365,367,389,399,409,414,419,423,435,439,448,455,
        469,473,478,488,496,500,512,524,546,554,559,562,566,575,584,587,
        595,602,604,611,618,620,628,633,640,647,657,664,671,678,687,697,
        701,709,711,723,729,733,737,748,754,769,775,779,783,790,797,803,
        808,810,814,821,828,837,849,859,871,875,884,891,913,918,923,927,
        939,947,951,958,965,971,978,986,993,999,1005,1011,1017,1028,1034,
        1039,1047,1068,1077,1079,1102,1119,1130,1152,1156,1163,1167,1177,
        1182,1196,1205,1211,1238,1255,1257,1269,1271,1279,1282,1289,1294,
        1298,1312,1315,1323,1327,1334
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!jsoniqParser.__ATN) {
            jsoniqParser.__ATN = new antlr.ATNDeserializer().deserialize(jsoniqParser._serializedATN);
        }

        return jsoniqParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(jsoniqParser.literalNames, jsoniqParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return jsoniqParser.vocabulary;
    }

    private static readonly decisionsToDFA = jsoniqParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ModuleAndThisIsItContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public module(): ModuleContext {
        return this.getRuleContext(0, ModuleContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_moduleAndThisIsIt;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterModuleAndThisIsIt) {
             listener.enterModuleAndThisIsIt(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitModuleAndThisIsIt) {
             listener.exitModuleAndThisIsIt(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitModuleAndThisIsIt) {
            return visitor.visitModuleAndThisIsIt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleContext extends antlr.ParserRuleContext {
    public _vers?: StringLiteralContext;
    public _main?: MainModuleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public libraryModule(): LibraryModuleContext | null {
        return this.getRuleContext(0, LibraryModuleContext);
    }
    public Kjsoniq(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kjsoniq, 0);
    }
    public Kversion(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kversion, 0);
    }
    public mainModule(): MainModuleContext | null {
        return this.getRuleContext(0, MainModuleContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_module;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterModule) {
             listener.enterModule(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitModule) {
             listener.exitModule(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MainModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prolog(): PrologContext {
        return this.getRuleContext(0, PrologContext)!;
    }
    public program(): ProgramContext {
        return this.getRuleContext(0, ProgramContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_mainModule;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterMainModule) {
             listener.enterMainModule(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitMainModule) {
             listener.exitMainModule(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitMainModule) {
            return visitor.visitMainModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LibraryModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NCName(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.NCName, 0)!;
    }
    public Equal(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Equal, 0)!;
    }
    public uriLiteral(): UriLiteralContext {
        return this.getRuleContext(0, UriLiteralContext)!;
    }
    public prolog(): PrologContext {
        return this.getRuleContext(0, PrologContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_libraryModule;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterLibraryModule) {
             listener.enterLibraryModule(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitLibraryModule) {
             listener.exitLibraryModule(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitLibraryModule) {
            return visitor.visitLibraryModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrologContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotatedDecl(): AnnotatedDeclContext[];
    public annotatedDecl(i: number): AnnotatedDeclContext | null;
    public annotatedDecl(i?: number): AnnotatedDeclContext[] | AnnotatedDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedDeclContext);
        }

        return this.getRuleContext(i, AnnotatedDeclContext);
    }
    public setter(): SetterContext[];
    public setter(i: number): SetterContext | null;
    public setter(i?: number): SetterContext[] | SetterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SetterContext);
        }

        return this.getRuleContext(i, SetterContext);
    }
    public namespaceDecl(): NamespaceDeclContext[];
    public namespaceDecl(i: number): NamespaceDeclContext | null;
    public namespaceDecl(i?: number): NamespaceDeclContext[] | NamespaceDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceDeclContext);
        }

        return this.getRuleContext(i, NamespaceDeclContext);
    }
    public moduleImport(): ModuleImportContext[];
    public moduleImport(i: number): ModuleImportContext | null;
    public moduleImport(i?: number): ModuleImportContext[] | ModuleImportContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModuleImportContext);
        }

        return this.getRuleContext(i, ModuleImportContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_prolog;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterProlog) {
             listener.enterProlog(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitProlog) {
             listener.exitProlog(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitProlog) {
            return visitor.visitProlog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statementsAndOptionalExpr(): StatementsAndOptionalExprContext {
        return this.getRuleContext(0, StatementsAndOptionalExprContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_program;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_statements;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStatements) {
             listener.enterStatements(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStatements) {
             listener.exitStatements(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsAndExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statements(): StatementsContext {
        return this.getRuleContext(0, StatementsContext)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_statementsAndExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStatementsAndExpr) {
             listener.enterStatementsAndExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStatementsAndExpr) {
             listener.exitStatementsAndExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStatementsAndExpr) {
            return visitor.visitStatementsAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsAndOptionalExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statements(): StatementsContext {
        return this.getRuleContext(0, StatementsContext)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_statementsAndOptionalExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStatementsAndOptionalExpr) {
             listener.enterStatementsAndOptionalExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStatementsAndOptionalExpr) {
             listener.exitStatementsAndOptionalExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStatementsAndOptionalExpr) {
            return visitor.visitStatementsAndOptionalExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public applyStatement(): ApplyStatementContext | null {
        return this.getRuleContext(0, ApplyStatementContext);
    }
    public assignStatement(): AssignStatementContext | null {
        return this.getRuleContext(0, AssignStatementContext);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public exitStatement(): ExitStatementContext | null {
        return this.getRuleContext(0, ExitStatementContext);
    }
    public flowrStatement(): FlowrStatementContext | null {
        return this.getRuleContext(0, FlowrStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public switchStatement(): SwitchStatementContext | null {
        return this.getRuleContext(0, SwitchStatementContext);
    }
    public tryCatchStatement(): TryCatchStatementContext | null {
        return this.getRuleContext(0, TryCatchStatementContext);
    }
    public typeSwitchStatement(): TypeSwitchStatementContext | null {
        return this.getRuleContext(0, TypeSwitchStatementContext);
    }
    public varDeclStatement(): VarDeclStatementContext | null {
        return this.getRuleContext(0, VarDeclStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_statement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ApplyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprSimple(): ExprSimpleContext {
        return this.getRuleContext(0, ExprSimpleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_applyStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterApplyStatement) {
             listener.enterApplyStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitApplyStatement) {
             listener.exitApplyStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitApplyStatement) {
            return visitor.visitApplyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ReferenceSymbol(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.ReferenceSymbol, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_assignStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAssignStatement) {
             listener.enterAssignStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAssignStatement) {
             listener.exitAssignStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAssignStatement) {
            return visitor.visitAssignStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public statements(): StatementsContext {
        return this.getRuleContext(0, StatementsContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_blockStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kbreak(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kbreak, 0)!;
    }
    public Kloop(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kloop, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_breakStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcontinue(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcontinue, 0)!;
    }
    public Kloop(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kloop, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_continueStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kexit(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kexit, 0)!;
    }
    public Kreturning(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturning, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_exitStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterExitStatement) {
             listener.enterExitStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitExitStatement) {
             listener.exitExitStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitExitStatement) {
            return visitor.visitExitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlowrStatementContext extends antlr.ParserRuleContext {
    public _start_for?: ForClauseContext;
    public _start_let?: LetClauseContext;
    public _returnStmt?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public forClause(): ForClauseContext[];
    public forClause(i: number): ForClauseContext | null;
    public forClause(i?: number): ForClauseContext[] | ForClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ForClauseContext);
        }

        return this.getRuleContext(i, ForClauseContext);
    }
    public letClause(): LetClauseContext[];
    public letClause(i: number): LetClauseContext | null;
    public letClause(i?: number): LetClauseContext[] | LetClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LetClauseContext);
        }

        return this.getRuleContext(i, LetClauseContext);
    }
    public whereClause(): WhereClauseContext[];
    public whereClause(i: number): WhereClauseContext | null;
    public whereClause(i?: number): WhereClauseContext[] | WhereClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseContext);
        }

        return this.getRuleContext(i, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext[];
    public groupByClause(i: number): GroupByClauseContext | null;
    public groupByClause(i?: number): GroupByClauseContext[] | GroupByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupByClauseContext);
        }

        return this.getRuleContext(i, GroupByClauseContext);
    }
    public orderByClause(): OrderByClauseContext[];
    public orderByClause(i: number): OrderByClauseContext | null;
    public orderByClause(i?: number): OrderByClauseContext[] | OrderByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }

        return this.getRuleContext(i, OrderByClauseContext);
    }
    public countClause(): CountClauseContext[];
    public countClause(i: number): CountClauseContext | null;
    public countClause(i?: number): CountClauseContext[] | CountClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CountClauseContext);
        }

        return this.getRuleContext(i, CountClauseContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_flowrStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFlowrStatement) {
             listener.enterFlowrStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFlowrStatement) {
             listener.exitFlowrStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFlowrStatement) {
            return visitor.visitFlowrStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public _test_expr?: ExprContext;
    public _branch?: StatementContext;
    public _else_branch?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kif(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kif, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kthen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kthen, 0)!;
    }
    public Kelse(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kelse, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_ifStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchStatementContext extends antlr.ParserRuleContext {
    public _condExpr?: ExprContext;
    public _switchCaseStatement?: SwitchCaseStatementContext;
    public _cases: SwitchCaseStatementContext[] = [];
    public _def?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kswitch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kswitch, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public switchCaseStatement(): SwitchCaseStatementContext[];
    public switchCaseStatement(i: number): SwitchCaseStatementContext | null;
    public switchCaseStatement(i?: number): SwitchCaseStatementContext[] | SwitchCaseStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchCaseStatementContext);
        }

        return this.getRuleContext(i, SwitchCaseStatementContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_switchStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSwitchStatement) {
             listener.enterSwitchStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSwitchStatement) {
             listener.exitSwitchStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchCaseStatementContext extends antlr.ParserRuleContext {
    public _exprSingle?: ExprSingleContext;
    public _cond: ExprSingleContext[] = [];
    public _ret?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public Kcase(): antlr.TerminalNode[];
    public Kcase(i: number): antlr.TerminalNode | null;
    public Kcase(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Kcase);
    	} else {
    		return this.getToken(jsoniqParser.Kcase, i);
    	}
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_switchCaseStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSwitchCaseStatement) {
             listener.enterSwitchCaseStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSwitchCaseStatement) {
             listener.exitSwitchCaseStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSwitchCaseStatement) {
            return visitor.visitSwitchCaseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TryCatchStatementContext extends antlr.ParserRuleContext {
    public _try_block?: BlockStatementContext;
    public _catchCaseStatement?: CatchCaseStatementContext;
    public _catches: CatchCaseStatementContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ktry(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktry, 0)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public catchCaseStatement(): CatchCaseStatementContext[];
    public catchCaseStatement(i: number): CatchCaseStatementContext | null;
    public catchCaseStatement(i?: number): CatchCaseStatementContext[] | CatchCaseStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchCaseStatementContext);
        }

        return this.getRuleContext(i, CatchCaseStatementContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_tryCatchStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTryCatchStatement) {
             listener.enterTryCatchStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTryCatchStatement) {
             listener.exitTryCatchStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTryCatchStatement) {
            return visitor.visitTryCatchStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchCaseStatementContext extends antlr.ParserRuleContext {
    public _s114?: Token | null;
    public _jokers: antlr.Token[] = [];
    public _qname?: QnameContext;
    public _errors: QnameContext[] = [];
    public _catch_block?: BlockStatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcatch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcatch, 0)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public Times(): antlr.TerminalNode[];
    public Times(i: number): antlr.TerminalNode | null;
    public Times(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Times);
    	} else {
    		return this.getToken(jsoniqParser.Times, i);
    	}
    }
    public qname(): QnameContext[];
    public qname(i: number): QnameContext | null;
    public qname(i?: number): QnameContext[] | QnameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QnameContext);
        }

        return this.getRuleContext(i, QnameContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_catchCaseStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCatchCaseStatement) {
             listener.enterCatchCaseStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCatchCaseStatement) {
             listener.exitCatchCaseStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCatchCaseStatement) {
            return visitor.visitCatchCaseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSwitchStatementContext extends antlr.ParserRuleContext {
    public _cond?: ExprContext;
    public _caseStatement?: CaseStatementContext;
    public _cases: CaseStatementContext[] = [];
    public _var_ref?: VarRefContext;
    public _def?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ktypeswitch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktypeswitch, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public caseStatement(): CaseStatementContext[];
    public caseStatement(i: number): CaseStatementContext | null;
    public caseStatement(i?: number): CaseStatementContext[] | CaseStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseStatementContext);
        }

        return this.getRuleContext(i, CaseStatementContext);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_typeSwitchStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTypeSwitchStatement) {
             listener.enterTypeSwitchStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTypeSwitchStatement) {
             listener.exitTypeSwitchStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTypeSwitchStatement) {
            return visitor.visitTypeSwitchStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseStatementContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _sequenceType?: SequenceTypeContext;
    public _union: SequenceTypeContext[] = [];
    public _ret?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcase(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcase, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public sequenceType(): SequenceTypeContext[];
    public sequenceType(i: number): SequenceTypeContext | null;
    public sequenceType(i?: number): SequenceTypeContext[] | SequenceTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }

        return this.getRuleContext(i, SequenceTypeContext);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_caseStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCaseStatement) {
             listener.enterCaseStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCaseStatement) {
             listener.exitCaseStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationContext extends antlr.ParserRuleContext {
    public _name?: QnameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AnnotationSymbol(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.AnnotationSymbol, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public BracketOpen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BracketOpen, 0);
    }
    public Literal(): antlr.TerminalNode[];
    public Literal(i: number): antlr.TerminalNode | null;
    public Literal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Literal);
    	} else {
    		return this.getToken(jsoniqParser.Literal, i);
    	}
    }
    public BracketClose(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BracketClose, 0);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_annotation;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAnnotation) {
             listener.enterAnnotation(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAnnotation) {
             listener.exitAnnotation(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_annotations;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAnnotations) {
             listener.enterAnnotations(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAnnotations) {
             listener.exitAnnotations(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAnnotations) {
            return visitor.visitAnnotations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext {
        return this.getRuleContext(0, AnnotationsContext)!;
    }
    public Kvariable(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kvariable, 0)!;
    }
    public varDeclForStatement(): VarDeclForStatementContext[];
    public varDeclForStatement(i: number): VarDeclForStatementContext | null;
    public varDeclForStatement(i?: number): VarDeclForStatementContext[] | VarDeclForStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclForStatementContext);
        }

        return this.getRuleContext(i, VarDeclForStatementContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_varDeclStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterVarDeclStatement) {
             listener.enterVarDeclStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitVarDeclStatement) {
             listener.exitVarDeclStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitVarDeclStatement) {
            return visitor.visitVarDeclStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclForStatementContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _exprSingle?: ExprSingleContext;
    public _expr_vals: ExprSingleContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public exprSingle(): ExprSingleContext | null {
        return this.getRuleContext(0, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_varDeclForStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterVarDeclForStatement) {
             listener.enterVarDeclForStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitVarDeclForStatement) {
             listener.exitVarDeclForStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitVarDeclForStatement) {
            return visitor.visitVarDeclForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public _test_expr?: ExprContext;
    public _stmt?: StatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kwhile(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kwhile, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_whileStatement;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public defaultCollationDecl(): DefaultCollationDeclContext | null {
        return this.getRuleContext(0, DefaultCollationDeclContext);
    }
    public orderingModeDecl(): OrderingModeDeclContext | null {
        return this.getRuleContext(0, OrderingModeDeclContext);
    }
    public emptyOrderDecl(): EmptyOrderDeclContext | null {
        return this.getRuleContext(0, EmptyOrderDeclContext);
    }
    public decimalFormatDecl(): DecimalFormatDeclContext | null {
        return this.getRuleContext(0, DecimalFormatDeclContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_setter;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSetter) {
             listener.enterSetter(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSetter) {
             listener.exitSetter(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamespaceDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public NCName(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.NCName, 0)!;
    }
    public Equal(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Equal, 0)!;
    }
    public uriLiteral(): UriLiteralContext {
        return this.getRuleContext(0, UriLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_namespaceDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterNamespaceDecl) {
             listener.enterNamespaceDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitNamespaceDecl) {
             listener.exitNamespaceDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitNamespaceDecl) {
            return visitor.visitNamespaceDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotatedDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionDecl(): FunctionDeclContext | null {
        return this.getRuleContext(0, FunctionDeclContext);
    }
    public varDecl(): VarDeclContext | null {
        return this.getRuleContext(0, VarDeclContext);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public contextItemDecl(): ContextItemDeclContext | null {
        return this.getRuleContext(0, ContextItemDeclContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_annotatedDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAnnotatedDecl) {
             listener.enterAnnotatedDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAnnotatedDecl) {
             listener.exitAnnotatedDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAnnotatedDecl) {
            return visitor.visitAnnotatedDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefaultCollationDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Kcollation(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcollation, 0)!;
    }
    public uriLiteral(): UriLiteralContext {
        return this.getRuleContext(0, UriLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_defaultCollationDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterDefaultCollationDecl) {
             listener.enterDefaultCollationDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitDefaultCollationDecl) {
             listener.exitDefaultCollationDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitDefaultCollationDecl) {
            return visitor.visitDefaultCollationDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderingModeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public Kunordered(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kunordered, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_orderingModeDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterOrderingModeDecl) {
             listener.enterOrderingModeDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitOrderingModeDecl) {
             listener.exitOrderingModeDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitOrderingModeDecl) {
            return visitor.visitOrderingModeDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyOrderDeclContext extends antlr.ParserRuleContext {
    public _emptySequenceOrder?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Korder(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Korder, 0)!;
    }
    public Kempty(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kempty, 0)!;
    }
    public Kgreatest(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kgreatest, 0);
    }
    public Kleast(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kleast, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_emptyOrderDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterEmptyOrderDecl) {
             listener.enterEmptyOrderDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitEmptyOrderDecl) {
             listener.exitEmptyOrderDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitEmptyOrderDecl) {
            return visitor.visitEmptyOrderDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalFormatDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public dfPropertyName(): DfPropertyNameContext[];
    public dfPropertyName(i: number): DfPropertyNameContext | null;
    public dfPropertyName(i?: number): DfPropertyNameContext[] | DfPropertyNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DfPropertyNameContext);
        }

        return this.getRuleContext(i, DfPropertyNameContext);
    }
    public Equal(): antlr.TerminalNode[];
    public Equal(i: number): antlr.TerminalNode | null;
    public Equal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Equal);
    	} else {
    		return this.getToken(jsoniqParser.Equal, i);
    	}
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public qname(): QnameContext | null {
        return this.getRuleContext(0, QnameContext);
    }
    public Kdefault(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_decimalFormatDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterDecimalFormatDecl) {
             listener.enterDecimalFormatDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitDecimalFormatDecl) {
             listener.exitDecimalFormatDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitDecimalFormatDecl) {
            return visitor.visitDecimalFormatDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QnameContext extends antlr.ParserRuleContext {
    public _ns?: Token | null;
    public _nskw?: KeyWordsContext;
    public _local_name?: Token | null;
    public _local_namekw?: KeyWordsContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NCName(): antlr.TerminalNode[];
    public NCName(i: number): antlr.TerminalNode | null;
    public NCName(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.NCName);
    	} else {
    		return this.getToken(jsoniqParser.NCName, i);
    	}
    }
    public keyWords(): KeyWordsContext[];
    public keyWords(i: number): KeyWordsContext | null;
    public keyWords(i?: number): KeyWordsContext[] | KeyWordsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KeyWordsContext);
        }

        return this.getRuleContext(i, KeyWordsContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_qname;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterQname) {
             listener.enterQname(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitQname) {
             listener.exitQname(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitQname) {
            return visitor.visitQname(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DfPropertyNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_dfPropertyName;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterDfPropertyName) {
             listener.enterDfPropertyName(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitDfPropertyName) {
             listener.exitDfPropertyName(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitDfPropertyName) {
            return visitor.visitDfPropertyName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleImportContext extends antlr.ParserRuleContext {
    public _prefix?: Token | null;
    public _targetNamespace?: UriLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uriLiteral(): UriLiteralContext[];
    public uriLiteral(i: number): UriLiteralContext | null;
    public uriLiteral(i?: number): UriLiteralContext[] | UriLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UriLiteralContext);
        }

        return this.getRuleContext(i, UriLiteralContext);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Equal, 0);
    }
    public Kat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kat, 0);
    }
    public NCName(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NCName, 0);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_moduleImport;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterModuleImport) {
             listener.enterModuleImport(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitModuleImport) {
             listener.exitModuleImport(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitModuleImport) {
            return visitor.visitModuleImport(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclContext extends antlr.ParserRuleContext {
    public _external?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public annotations(): AnnotationsContext {
        return this.getRuleContext(0, AnnotationsContext)!;
    }
    public Kvariable(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kvariable, 0)!;
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public exprSingle(): ExprSingleContext | null {
        return this.getRuleContext(0, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_varDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterVarDecl) {
             listener.enterVarDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitVarDecl) {
             listener.exitVarDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContextItemDeclContext extends antlr.ParserRuleContext {
    public _external?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public Kcontext(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcontext, 0)!;
    }
    public Kitem(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kitem, 0)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public exprSingle(): ExprSingleContext | null {
        return this.getRuleContext(0, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_contextItemDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterContextItemDecl) {
             listener.enterContextItemDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitContextItemDecl) {
             listener.exitContextItemDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitContextItemDecl) {
            return visitor.visitContextItemDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDeclContext extends antlr.ParserRuleContext {
    public _fn_name?: QnameContext;
    public _return_type?: SequenceTypeContext;
    public _fn_body?: StatementsAndOptionalExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public annotations(): AnnotationsContext {
        return this.getRuleContext(0, AnnotationsContext)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public BraceOpen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceOpen, 0);
    }
    public BraceClose(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceClose, 0);
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public statementsAndOptionalExpr(): StatementsAndOptionalExprContext | null {
        return this.getRuleContext(0, StatementsAndOptionalExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_functionDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFunctionDecl) {
             listener.enterFunctionDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFunctionDecl) {
             listener.exitFunctionDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeDeclContext extends antlr.ParserRuleContext {
    public _type_name?: QnameContext;
    public _schema?: SchemaLanguageContext;
    public _type_definition?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdeclare(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdeclare, 0)!;
    }
    public Ktype(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktype, 0)!;
    }
    public Kas(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kas, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public schemaLanguage(): SchemaLanguageContext | null {
        return this.getRuleContext(0, SchemaLanguageContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_typeDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTypeDecl) {
             listener.enterTypeDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTypeDecl) {
             listener.exitTypeDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTypeDecl) {
            return visitor.visitTypeDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaLanguageContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kjson(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_schemaLanguage;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSchemaLanguage) {
             listener.enterSchemaLanguage(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSchemaLanguage) {
             listener.exitSchemaLanguage(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSchemaLanguage) {
            return visitor.visitSchemaLanguage(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_paramList;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ReferenceSymbol(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.ReferenceSymbol, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_param;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_expr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprSingleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprSimple(): ExprSimpleContext | null {
        return this.getRuleContext(0, ExprSimpleContext);
    }
    public flowrExpr(): FlowrExprContext | null {
        return this.getRuleContext(0, FlowrExprContext);
    }
    public switchExpr(): SwitchExprContext | null {
        return this.getRuleContext(0, SwitchExprContext);
    }
    public typeSwitchExpr(): TypeSwitchExprContext | null {
        return this.getRuleContext(0, TypeSwitchExprContext);
    }
    public ifExpr(): IfExprContext | null {
        return this.getRuleContext(0, IfExprContext);
    }
    public tryCatchExpr(): TryCatchExprContext | null {
        return this.getRuleContext(0, TryCatchExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_exprSingle;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterExprSingle) {
             listener.enterExprSingle(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitExprSingle) {
             listener.exitExprSingle(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitExprSingle) {
            return visitor.visitExprSingle(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprSimpleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public quantifiedExpr(): QuantifiedExprContext | null {
        return this.getRuleContext(0, QuantifiedExprContext);
    }
    public orExpr(): OrExprContext | null {
        return this.getRuleContext(0, OrExprContext);
    }
    public insertExpr(): InsertExprContext | null {
        return this.getRuleContext(0, InsertExprContext);
    }
    public deleteExpr(): DeleteExprContext | null {
        return this.getRuleContext(0, DeleteExprContext);
    }
    public renameExpr(): RenameExprContext | null {
        return this.getRuleContext(0, RenameExprContext);
    }
    public replaceExpr(): ReplaceExprContext | null {
        return this.getRuleContext(0, ReplaceExprContext);
    }
    public transformExpr(): TransformExprContext | null {
        return this.getRuleContext(0, TransformExprContext);
    }
    public appendExpr(): AppendExprContext | null {
        return this.getRuleContext(0, AppendExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_exprSimple;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterExprSimple) {
             listener.enterExprSimple(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitExprSimple) {
             listener.exitExprSimple(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitExprSimple) {
            return visitor.visitExprSimple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlowrExprContext extends antlr.ParserRuleContext {
    public _start_for?: ForClauseContext;
    public _start_let?: LetClauseContext;
    public _return_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public forClause(): ForClauseContext[];
    public forClause(i: number): ForClauseContext | null;
    public forClause(i?: number): ForClauseContext[] | ForClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ForClauseContext);
        }

        return this.getRuleContext(i, ForClauseContext);
    }
    public letClause(): LetClauseContext[];
    public letClause(i: number): LetClauseContext | null;
    public letClause(i?: number): LetClauseContext[] | LetClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LetClauseContext);
        }

        return this.getRuleContext(i, LetClauseContext);
    }
    public whereClause(): WhereClauseContext[];
    public whereClause(i: number): WhereClauseContext | null;
    public whereClause(i?: number): WhereClauseContext[] | WhereClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseContext);
        }

        return this.getRuleContext(i, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext[];
    public groupByClause(i: number): GroupByClauseContext | null;
    public groupByClause(i?: number): GroupByClauseContext[] | GroupByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupByClauseContext);
        }

        return this.getRuleContext(i, GroupByClauseContext);
    }
    public orderByClause(): OrderByClauseContext[];
    public orderByClause(i: number): OrderByClauseContext | null;
    public orderByClause(i?: number): OrderByClauseContext[] | OrderByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }

        return this.getRuleContext(i, OrderByClauseContext);
    }
    public countClause(): CountClauseContext[];
    public countClause(i: number): CountClauseContext | null;
    public countClause(i?: number): CountClauseContext[] | CountClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CountClauseContext);
        }

        return this.getRuleContext(i, CountClauseContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_flowrExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFlowrExpr) {
             listener.enterFlowrExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFlowrExpr) {
             listener.exitFlowrExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFlowrExpr) {
            return visitor.visitFlowrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForClauseContext extends antlr.ParserRuleContext {
    public _forVar?: ForVarContext;
    public _vars: ForVarContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kfor(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kfor, 0)!;
    }
    public forVar(): ForVarContext[];
    public forVar(i: number): ForVarContext | null;
    public forVar(i?: number): ForVarContext[] | ForVarContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ForVarContext);
        }

        return this.getRuleContext(i, ForVarContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_forClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterForClause) {
             listener.enterForClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitForClause) {
             listener.exitForClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitForClause) {
            return visitor.visitForClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForVarContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _seq?: SequenceTypeContext;
    public _flag?: Token | null;
    public _at?: VarRefContext;
    public _ex?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kin(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kin, 0)!;
    }
    public varRef(): VarRefContext[];
    public varRef(i: number): VarRefContext | null;
    public varRef(i?: number): VarRefContext[] | VarRefContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarRefContext);
        }

        return this.getRuleContext(i, VarRefContext);
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public Kempty(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kempty, 0);
    }
    public Kat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kat, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public Kallowing(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kallowing, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_forVar;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterForVar) {
             listener.enterForVar(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitForVar) {
             listener.exitForVar(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitForVar) {
            return visitor.visitForVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetClauseContext extends antlr.ParserRuleContext {
    public _letVar?: LetVarContext;
    public _vars: LetVarContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Klet(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Klet, 0)!;
    }
    public letVar(): LetVarContext[];
    public letVar(i: number): LetVarContext | null;
    public letVar(i?: number): LetVarContext[] | LetVarContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LetVarContext);
        }

        return this.getRuleContext(i, LetVarContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_letClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterLetClause) {
             listener.enterLetClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitLetClause) {
             listener.exitLetClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitLetClause) {
            return visitor.visitLetClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetVarContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _seq?: SequenceTypeContext;
    public _ex?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_letVar;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterLetVar) {
             listener.enterLetVar(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitLetVar) {
             listener.exitLetVar(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitLetVar) {
            return visitor.visitLetVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kwhere(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kwhere, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_whereClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public _groupByVar?: GroupByVarContext;
    public _vars: GroupByVarContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kgroup(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kgroup, 0)!;
    }
    public Kby(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kby, 0)!;
    }
    public groupByVar(): GroupByVarContext[];
    public groupByVar(i: number): GroupByVarContext | null;
    public groupByVar(i?: number): GroupByVarContext[] | GroupByVarContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupByVarContext);
        }

        return this.getRuleContext(i, GroupByVarContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_groupByClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByVarContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _seq?: SequenceTypeContext;
    public _decl?: Token | null;
    public _ex?: ExprSingleContext;
    public _uri?: UriLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public Kcollation(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcollation, 0);
    }
    public exprSingle(): ExprSingleContext | null {
        return this.getRuleContext(0, ExprSingleContext);
    }
    public uriLiteral(): UriLiteralContext | null {
        return this.getRuleContext(0, UriLiteralContext);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_groupByVar;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterGroupByVar) {
             listener.enterGroupByVar(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitGroupByVar) {
             listener.exitGroupByVar(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitGroupByVar) {
            return visitor.visitGroupByVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public _stb?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public orderByExpr(): OrderByExprContext[];
    public orderByExpr(i: number): OrderByExprContext | null;
    public orderByExpr(i?: number): OrderByExprContext[] | OrderByExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByExprContext);
        }

        return this.getRuleContext(i, OrderByExprContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public Korder(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Korder, 0);
    }
    public Kby(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kby, 0);
    }
    public Kstable(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kstable, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_orderByClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterOrderByClause) {
             listener.enterOrderByClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitOrderByClause) {
             listener.exitOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByExprContext extends antlr.ParserRuleContext {
    public _ex?: ExprSingleContext;
    public _desc?: Token | null;
    public _gr?: Token | null;
    public _ls?: Token | null;
    public _uril?: UriLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public Kascending(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kascending, 0);
    }
    public Kempty(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kempty, 0);
    }
    public Kcollation(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcollation, 0);
    }
    public Kdescending(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdescending, 0);
    }
    public uriLiteral(): UriLiteralContext | null {
        return this.getRuleContext(0, UriLiteralContext);
    }
    public Kgreatest(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kgreatest, 0);
    }
    public Kleast(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kleast, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_orderByExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterOrderByExpr) {
             listener.enterOrderByExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitOrderByExpr) {
             listener.exitOrderByExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitOrderByExpr) {
            return visitor.visitOrderByExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CountClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcount(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcount, 0)!;
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_countClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCountClause) {
             listener.enterCountClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCountClause) {
             listener.exitCountClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCountClause) {
            return visitor.visitCountClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuantifiedExprContext extends antlr.ParserRuleContext {
    public _so?: Token | null;
    public _ev?: Token | null;
    public _quantifiedExprVar?: QuantifiedExprVarContext;
    public _vars: QuantifiedExprVarContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ksatisfies(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ksatisfies, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public quantifiedExprVar(): QuantifiedExprVarContext[];
    public quantifiedExprVar(i: number): QuantifiedExprVarContext | null;
    public quantifiedExprVar(i?: number): QuantifiedExprVarContext[] | QuantifiedExprVarContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QuantifiedExprVarContext);
        }

        return this.getRuleContext(i, QuantifiedExprVarContext);
    }
    public Ksome(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ksome, 0);
    }
    public Kevery(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kevery, 0);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_quantifiedExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterQuantifiedExpr) {
             listener.enterQuantifiedExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitQuantifiedExpr) {
             listener.exitQuantifiedExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitQuantifiedExpr) {
            return visitor.visitQuantifiedExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuantifiedExprVarContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public Kin(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kin, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_quantifiedExprVar;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterQuantifiedExprVar) {
             listener.enterQuantifiedExprVar(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitQuantifiedExprVar) {
             listener.exitQuantifiedExprVar(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitQuantifiedExprVar) {
            return visitor.visitQuantifiedExprVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchExprContext extends antlr.ParserRuleContext {
    public _cond?: ExprContext;
    public _switchCaseClause?: SwitchCaseClauseContext;
    public _cases: SwitchCaseClauseContext[] = [];
    public _def?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kswitch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kswitch, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public switchCaseClause(): SwitchCaseClauseContext[];
    public switchCaseClause(i: number): SwitchCaseClauseContext | null;
    public switchCaseClause(i?: number): SwitchCaseClauseContext[] | SwitchCaseClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchCaseClauseContext);
        }

        return this.getRuleContext(i, SwitchCaseClauseContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_switchExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSwitchExpr) {
             listener.enterSwitchExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSwitchExpr) {
             listener.exitSwitchExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSwitchExpr) {
            return visitor.visitSwitchExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchCaseClauseContext extends antlr.ParserRuleContext {
    public _exprSingle?: ExprSingleContext;
    public _cond: ExprSingleContext[] = [];
    public _ret?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public Kcase(): antlr.TerminalNode[];
    public Kcase(i: number): antlr.TerminalNode | null;
    public Kcase(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Kcase);
    	} else {
    		return this.getToken(jsoniqParser.Kcase, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_switchCaseClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSwitchCaseClause) {
             listener.enterSwitchCaseClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSwitchCaseClause) {
             listener.exitSwitchCaseClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSwitchCaseClause) {
            return visitor.visitSwitchCaseClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSwitchExprContext extends antlr.ParserRuleContext {
    public _cond?: ExprContext;
    public _caseClause?: CaseClauseContext;
    public _cses: CaseClauseContext[] = [];
    public _var_ref?: VarRefContext;
    public _def?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ktypeswitch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktypeswitch, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kdefault(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdefault, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public caseClause(): CaseClauseContext[];
    public caseClause(i: number): CaseClauseContext | null;
    public caseClause(i?: number): CaseClauseContext[] | CaseClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }

        return this.getRuleContext(i, CaseClauseContext);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_typeSwitchExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTypeSwitchExpr) {
             listener.enterTypeSwitchExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTypeSwitchExpr) {
             listener.exitTypeSwitchExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTypeSwitchExpr) {
            return visitor.visitTypeSwitchExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseClauseContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _sequenceType?: SequenceTypeContext;
    public _union: SequenceTypeContext[] = [];
    public _ret?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcase(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcase, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public sequenceType(): SequenceTypeContext[];
    public sequenceType(i: number): SequenceTypeContext | null;
    public sequenceType(i?: number): SequenceTypeContext[] | SequenceTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }

        return this.getRuleContext(i, SequenceTypeContext);
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_caseClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCaseClause) {
             listener.enterCaseClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCaseClause) {
             listener.exitCaseClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExprContext extends antlr.ParserRuleContext {
    public _test_condition?: ExprContext;
    public _branch?: ExprSingleContext;
    public _else_branch?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kif(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kif, 0)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kthen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kthen, 0)!;
    }
    public Kelse(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kelse, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_ifExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterIfExpr) {
             listener.enterIfExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitIfExpr) {
             listener.exitIfExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TryCatchExprContext extends antlr.ParserRuleContext {
    public _try_expression?: ExprContext;
    public _catchClause?: CatchClauseContext;
    public _catches: CatchClauseContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ktry(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktry, 0)!;
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public catchClause(): CatchClauseContext[];
    public catchClause(i: number): CatchClauseContext | null;
    public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }

        return this.getRuleContext(i, CatchClauseContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_tryCatchExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTryCatchExpr) {
             listener.enterTryCatchExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTryCatchExpr) {
             listener.exitTryCatchExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTryCatchExpr) {
            return visitor.visitTryCatchExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchClauseContext extends antlr.ParserRuleContext {
    public _s114?: Token | null;
    public _jokers: antlr.Token[] = [];
    public _qname?: QnameContext;
    public _errors: QnameContext[] = [];
    public _catch_expression?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcatch(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcatch, 0)!;
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public Times(): antlr.TerminalNode[];
    public Times(i: number): antlr.TerminalNode | null;
    public Times(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Times);
    	} else {
    		return this.getToken(jsoniqParser.Times, i);
    	}
    }
    public qname(): QnameContext[];
    public qname(i: number): QnameContext | null;
    public qname(i?: number): QnameContext[] | QnameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QnameContext);
        }

        return this.getRuleContext(i, QnameContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_catchClause;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCatchClause) {
             listener.enterCatchClause(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCatchClause) {
             listener.exitCatchClause(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrExprContext extends antlr.ParserRuleContext {
    public _main_expr?: AndExprContext;
    public _andExpr?: AndExprContext;
    public _rhs: AndExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public andExpr(): AndExprContext[];
    public andExpr(i: number): AndExprContext | null;
    public andExpr(i?: number): AndExprContext[] | AndExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AndExprContext);
        }

        return this.getRuleContext(i, AndExprContext);
    }
    public Kor(): antlr.TerminalNode[];
    public Kor(i: number): antlr.TerminalNode | null;
    public Kor(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Kor);
    	} else {
    		return this.getToken(jsoniqParser.Kor, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_orExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterOrExpr) {
             listener.enterOrExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitOrExpr) {
             listener.exitOrExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AndExprContext extends antlr.ParserRuleContext {
    public _main_expr?: NotExprContext;
    public _notExpr?: NotExprContext;
    public _rhs: NotExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public notExpr(): NotExprContext[];
    public notExpr(i: number): NotExprContext | null;
    public notExpr(i?: number): NotExprContext[] | NotExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NotExprContext);
        }

        return this.getRuleContext(i, NotExprContext);
    }
    public Kand(): antlr.TerminalNode[];
    public Kand(i: number): antlr.TerminalNode | null;
    public Kand(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Kand);
    	} else {
    		return this.getToken(jsoniqParser.Kand, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_andExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAndExpr) {
             listener.enterAndExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAndExpr) {
             listener.exitAndExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NotExprContext extends antlr.ParserRuleContext {
    public _Knot?: Token | null;
    public _op: antlr.Token[] = [];
    public _main_expr?: ComparisonExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comparisonExpr(): ComparisonExprContext {
        return this.getRuleContext(0, ComparisonExprContext)!;
    }
    public Knot(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Knot, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_notExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterNotExpr) {
             listener.enterNotExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitNotExpr) {
             listener.exitNotExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitNotExpr) {
            return visitor.visitNotExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonExprContext extends antlr.ParserRuleContext {
    public _main_expr?: StringConcatExprContext;
    public _s27?: Token | null;
    public _op: antlr.Token[] = [];
    public _s28?: Token | null;
    public _s29?: Token | null;
    public _s30?: Token | null;
    public _s31?: Token | null;
    public _s32?: Token | null;
    public _s128?: Token | null;
    public _s130?: Token | null;
    public _s131?: Token | null;
    public _s132?: Token | null;
    public _s133?: Token | null;
    public _s134?: Token | null;
    public __tset1997?: Token | null;
    public _stringConcatExpr?: StringConcatExprContext;
    public _rhs: StringConcatExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringConcatExpr(): StringConcatExprContext[];
    public stringConcatExpr(i: number): StringConcatExprContext | null;
    public stringConcatExpr(i?: number): StringConcatExprContext[] | StringConcatExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringConcatExprContext);
        }

        return this.getRuleContext(i, StringConcatExprContext);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Equal, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Not, 0);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Less, 0);
    }
    public LessEq(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.LessEq, 0);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Greater, 0);
    }
    public GreaterEq(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.GreaterEq, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_comparisonExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterComparisonExpr) {
             listener.enterComparisonExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitComparisonExpr) {
             listener.exitComparisonExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitComparisonExpr) {
            return visitor.visitComparisonExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringConcatExprContext extends antlr.ParserRuleContext {
    public _main_expr?: RangeExprContext;
    public _rangeExpr?: RangeExprContext;
    public _rhs: RangeExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rangeExpr(): RangeExprContext[];
    public rangeExpr(i: number): RangeExprContext | null;
    public rangeExpr(i?: number): RangeExprContext[] | RangeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangeExprContext);
        }

        return this.getRuleContext(i, RangeExprContext);
    }
    public Or(): antlr.TerminalNode[];
    public Or(i: number): antlr.TerminalNode | null;
    public Or(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Or);
    	} else {
    		return this.getToken(jsoniqParser.Or, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_stringConcatExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStringConcatExpr) {
             listener.enterStringConcatExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStringConcatExpr) {
             listener.exitStringConcatExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStringConcatExpr) {
            return visitor.visitStringConcatExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangeExprContext extends antlr.ParserRuleContext {
    public _main_expr?: AdditiveExprContext;
    public _additiveExpr?: AdditiveExprContext;
    public _rhs: AdditiveExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additiveExpr(): AdditiveExprContext[];
    public additiveExpr(i: number): AdditiveExprContext | null;
    public additiveExpr(i?: number): AdditiveExprContext[] | AdditiveExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExprContext);
        }

        return this.getRuleContext(i, AdditiveExprContext);
    }
    public Kto(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kto, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_rangeExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterRangeExpr) {
             listener.enterRangeExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitRangeExpr) {
             listener.exitRangeExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitRangeExpr) {
            return visitor.visitRangeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdditiveExprContext extends antlr.ParserRuleContext {
    public _main_expr?: MultiplicativeExprContext;
    public _s112?: Token | null;
    public _op: antlr.Token[] = [];
    public _s113?: Token | null;
    public __tset2115?: Token | null;
    public _multiplicativeExpr?: MultiplicativeExprContext;
    public _rhs: MultiplicativeExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicativeExpr(): MultiplicativeExprContext[];
    public multiplicativeExpr(i: number): MultiplicativeExprContext | null;
    public multiplicativeExpr(i?: number): MultiplicativeExprContext[] | MultiplicativeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExprContext);
        }

        return this.getRuleContext(i, MultiplicativeExprContext);
    }
    public Plus(): antlr.TerminalNode[];
    public Plus(i: number): antlr.TerminalNode | null;
    public Plus(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Plus);
    	} else {
    		return this.getToken(jsoniqParser.Plus, i);
    	}
    }
    public Minus(): antlr.TerminalNode[];
    public Minus(i: number): antlr.TerminalNode | null;
    public Minus(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Minus);
    	} else {
    		return this.getToken(jsoniqParser.Minus, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_additiveExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAdditiveExpr) {
             listener.enterAdditiveExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAdditiveExpr) {
             listener.exitAdditiveExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAdditiveExpr) {
            return visitor.visitAdditiveExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiplicativeExprContext extends antlr.ParserRuleContext {
    public _main_expr?: InstanceOfExprContext;
    public _s114?: Token | null;
    public _op: antlr.Token[] = [];
    public _s33?: Token | null;
    public _s34?: Token | null;
    public _s35?: Token | null;
    public __tset2148?: Token | null;
    public _instanceOfExpr?: InstanceOfExprContext;
    public _rhs: InstanceOfExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public instanceOfExpr(): InstanceOfExprContext[];
    public instanceOfExpr(i: number): InstanceOfExprContext | null;
    public instanceOfExpr(i?: number): InstanceOfExprContext[] | InstanceOfExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InstanceOfExprContext);
        }

        return this.getRuleContext(i, InstanceOfExprContext);
    }
    public Times(): antlr.TerminalNode[];
    public Times(i: number): antlr.TerminalNode | null;
    public Times(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Times);
    	} else {
    		return this.getToken(jsoniqParser.Times, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_multiplicativeExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterMultiplicativeExpr) {
             listener.enterMultiplicativeExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitMultiplicativeExpr) {
             listener.exitMultiplicativeExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitMultiplicativeExpr) {
            return visitor.visitMultiplicativeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InstanceOfExprContext extends antlr.ParserRuleContext {
    public _main_expr?: IsStaticallyExprContext;
    public _seq?: SequenceTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public isStaticallyExpr(): IsStaticallyExprContext {
        return this.getRuleContext(0, IsStaticallyExprContext)!;
    }
    public Kinstance(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kinstance, 0);
    }
    public Kof(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kof, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_instanceOfExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterInstanceOfExpr) {
             listener.enterInstanceOfExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitInstanceOfExpr) {
             listener.exitInstanceOfExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitInstanceOfExpr) {
            return visitor.visitInstanceOfExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IsStaticallyExprContext extends antlr.ParserRuleContext {
    public _main_expr?: TreatExprContext;
    public _seq?: SequenceTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public treatExpr(): TreatExprContext {
        return this.getRuleContext(0, TreatExprContext)!;
    }
    public Kis(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kis, 0);
    }
    public Kstatically(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kstatically, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_isStaticallyExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterIsStaticallyExpr) {
             listener.enterIsStaticallyExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitIsStaticallyExpr) {
             listener.exitIsStaticallyExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitIsStaticallyExpr) {
            return visitor.visitIsStaticallyExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TreatExprContext extends antlr.ParserRuleContext {
    public _main_expr?: CastableExprContext;
    public _seq?: SequenceTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public castableExpr(): CastableExprContext {
        return this.getRuleContext(0, CastableExprContext)!;
    }
    public Ktreat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktreat, 0);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_treatExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTreatExpr) {
             listener.enterTreatExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTreatExpr) {
             listener.exitTreatExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTreatExpr) {
            return visitor.visitTreatExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CastableExprContext extends antlr.ParserRuleContext {
    public _main_expr?: CastExprContext;
    public _single?: SingleTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public castExpr(): CastExprContext {
        return this.getRuleContext(0, CastExprContext)!;
    }
    public Kcastable(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcastable, 0);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public singleType(): SingleTypeContext | null {
        return this.getRuleContext(0, SingleTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_castableExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCastableExpr) {
             listener.enterCastableExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCastableExpr) {
             listener.exitCastableExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCastableExpr) {
            return visitor.visitCastableExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CastExprContext extends antlr.ParserRuleContext {
    public _main_expr?: ArrowExprContext;
    public _single?: SingleTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arrowExpr(): ArrowExprContext {
        return this.getRuleContext(0, ArrowExprContext)!;
    }
    public Kcast(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcast, 0);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public singleType(): SingleTypeContext | null {
        return this.getRuleContext(0, SingleTypeContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_castExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCastExpr) {
             listener.enterCastExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCastExpr) {
             listener.exitCastExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCastExpr) {
            return visitor.visitCastExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrowExprContext extends antlr.ParserRuleContext {
    public _main_expr?: UnaryExprContext;
    public _arrowFunctionSpecifier?: ArrowFunctionSpecifierContext;
    public _function_: ArrowFunctionSpecifierContext[] = [];
    public _argumentList?: ArgumentListContext;
    public _arguments: ArgumentListContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryExpr(): UnaryExprContext {
        return this.getRuleContext(0, UnaryExprContext)!;
    }
    public arrowFunctionSpecifier(): ArrowFunctionSpecifierContext[];
    public arrowFunctionSpecifier(i: number): ArrowFunctionSpecifierContext | null;
    public arrowFunctionSpecifier(i?: number): ArrowFunctionSpecifierContext[] | ArrowFunctionSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrowFunctionSpecifierContext);
        }

        return this.getRuleContext(i, ArrowFunctionSpecifierContext);
    }
    public argumentList(): ArgumentListContext[];
    public argumentList(i: number): ArgumentListContext | null;
    public argumentList(i?: number): ArgumentListContext[] | ArgumentListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentListContext);
        }

        return this.getRuleContext(i, ArgumentListContext);
    }
    public Equal(): antlr.TerminalNode[];
    public Equal(i: number): antlr.TerminalNode | null;
    public Equal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Equal);
    	} else {
    		return this.getToken(jsoniqParser.Equal, i);
    	}
    }
    public Greater(): antlr.TerminalNode[];
    public Greater(i: number): antlr.TerminalNode | null;
    public Greater(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Greater);
    	} else {
    		return this.getToken(jsoniqParser.Greater, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_arrowExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArrowExpr) {
             listener.enterArrowExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArrowExpr) {
             listener.exitArrowExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArrowExpr) {
            return visitor.visitArrowExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrowFunctionSpecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qname(): QnameContext | null {
        return this.getRuleContext(0, QnameContext);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public parenthesizedExpr(): ParenthesizedExprContext | null {
        return this.getRuleContext(0, ParenthesizedExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_arrowFunctionSpecifier;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArrowFunctionSpecifier) {
             listener.enterArrowFunctionSpecifier(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArrowFunctionSpecifier) {
             listener.exitArrowFunctionSpecifier(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArrowFunctionSpecifier) {
            return visitor.visitArrowFunctionSpecifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryExprContext extends antlr.ParserRuleContext {
    public _s113?: Token | null;
    public _op: antlr.Token[] = [];
    public _s112?: Token | null;
    public __tset2345?: Token | null;
    public _main_expr?: ValueExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valueExpr(): ValueExprContext {
        return this.getRuleContext(0, ValueExprContext)!;
    }
    public Minus(): antlr.TerminalNode[];
    public Minus(i: number): antlr.TerminalNode | null;
    public Minus(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Minus);
    	} else {
    		return this.getToken(jsoniqParser.Minus, i);
    	}
    }
    public Plus(): antlr.TerminalNode[];
    public Plus(i: number): antlr.TerminalNode | null;
    public Plus(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Plus);
    	} else {
    		return this.getToken(jsoniqParser.Plus, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_unaryExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterUnaryExpr) {
             listener.enterUnaryExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitUnaryExpr) {
             listener.exitUnaryExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExprContext extends antlr.ParserRuleContext {
    public _simpleMap_expr?: SimpleMapExprContext;
    public _validate_expr?: ValidateExprContext;
    public _annotate_expr?: AnnotateExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleMapExpr(): SimpleMapExprContext | null {
        return this.getRuleContext(0, SimpleMapExprContext);
    }
    public validateExpr(): ValidateExprContext | null {
        return this.getRuleContext(0, ValidateExprContext);
    }
    public annotateExpr(): AnnotateExprContext | null {
        return this.getRuleContext(0, AnnotateExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_valueExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterValueExpr) {
             listener.enterValueExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitValueExpr) {
             listener.exitValueExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitValueExpr) {
            return visitor.visitValueExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValidateExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kvalidate(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kvalidate, 0)!;
    }
    public Ktype(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktype, 0)!;
    }
    public sequenceType(): SequenceTypeContext {
        return this.getRuleContext(0, SequenceTypeContext)!;
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_validateExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterValidateExpr) {
             listener.enterValidateExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitValidateExpr) {
             listener.exitValidateExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitValidateExpr) {
            return visitor.visitValidateExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotateExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kannotate(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kannotate, 0)!;
    }
    public Ktype(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Ktype, 0)!;
    }
    public sequenceType(): SequenceTypeContext {
        return this.getRuleContext(0, SequenceTypeContext)!;
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_annotateExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAnnotateExpr) {
             listener.enterAnnotateExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAnnotateExpr) {
             listener.exitAnnotateExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAnnotateExpr) {
            return visitor.visitAnnotateExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleMapExprContext extends antlr.ParserRuleContext {
    public _main_expr?: PostFixExprContext;
    public _postFixExpr?: PostFixExprContext;
    public _map_expr: PostFixExprContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public postFixExpr(): PostFixExprContext[];
    public postFixExpr(i: number): PostFixExprContext | null;
    public postFixExpr(i?: number): PostFixExprContext[] | PostFixExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PostFixExprContext);
        }

        return this.getRuleContext(i, PostFixExprContext);
    }
    public Exclamation(): antlr.TerminalNode[];
    public Exclamation(i: number): antlr.TerminalNode | null;
    public Exclamation(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Exclamation);
    	} else {
    		return this.getToken(jsoniqParser.Exclamation, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_simpleMapExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSimpleMapExpr) {
             listener.enterSimpleMapExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSimpleMapExpr) {
             listener.exitSimpleMapExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSimpleMapExpr) {
            return visitor.visitSimpleMapExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PostFixExprContext extends antlr.ParserRuleContext {
    public _main_expr?: PrimaryExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpr(): PrimaryExprContext {
        return this.getRuleContext(0, PrimaryExprContext)!;
    }
    public arrayLookup(): ArrayLookupContext[];
    public arrayLookup(i: number): ArrayLookupContext | null;
    public arrayLookup(i?: number): ArrayLookupContext[] | ArrayLookupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrayLookupContext);
        }

        return this.getRuleContext(i, ArrayLookupContext);
    }
    public predicate(): PredicateContext[];
    public predicate(i: number): PredicateContext | null;
    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }
    public objectLookup(): ObjectLookupContext[];
    public objectLookup(i: number): ObjectLookupContext | null;
    public objectLookup(i?: number): ObjectLookupContext[] | ObjectLookupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectLookupContext);
        }

        return this.getRuleContext(i, ObjectLookupContext);
    }
    public arrayUnboxing(): ArrayUnboxingContext[];
    public arrayUnboxing(i: number): ArrayUnboxingContext | null;
    public arrayUnboxing(i?: number): ArrayUnboxingContext[] | ArrayUnboxingContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrayUnboxingContext);
        }

        return this.getRuleContext(i, ArrayUnboxingContext);
    }
    public argumentList(): ArgumentListContext[];
    public argumentList(i: number): ArgumentListContext | null;
    public argumentList(i?: number): ArgumentListContext[] | ArgumentListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentListContext);
        }

        return this.getRuleContext(i, ArgumentListContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_postFixExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterPostFixExpr) {
             listener.enterPostFixExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitPostFixExpr) {
             listener.exitPostFixExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitPostFixExpr) {
            return visitor.visitPostFixExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayLookupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SquareBracketOpen(): antlr.TerminalNode[];
    public SquareBracketOpen(i: number): antlr.TerminalNode | null;
    public SquareBracketOpen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.SquareBracketOpen);
    	} else {
    		return this.getToken(jsoniqParser.SquareBracketOpen, i);
    	}
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SquareBracketClose(): antlr.TerminalNode[];
    public SquareBracketClose(i: number): antlr.TerminalNode | null;
    public SquareBracketClose(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.SquareBracketClose);
    	} else {
    		return this.getToken(jsoniqParser.SquareBracketClose, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_arrayLookup;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArrayLookup) {
             listener.enterArrayLookup(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArrayLookup) {
             listener.exitArrayLookup(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArrayLookup) {
            return visitor.visitArrayLookup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayUnboxingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SquareBracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketOpen, 0)!;
    }
    public SquareBracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_arrayUnboxing;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArrayUnboxing) {
             listener.enterArrayUnboxing(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArrayUnboxing) {
             listener.exitArrayUnboxing(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArrayUnboxing) {
            return visitor.visitArrayUnboxing(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SquareBracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketOpen, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SquareBracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_predicate;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterPredicate) {
             listener.enterPredicate(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitPredicate) {
             listener.exitPredicate(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectLookupContext extends antlr.ParserRuleContext {
    public _kw?: KeyWordsContext;
    public _lt?: StringLiteralContext;
    public _nc?: Token | null;
    public _pe?: ParenthesizedExprContext;
    public _vr?: VarRefContext;
    public _ci?: ContextItemExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Dot(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Dot, 0)!;
    }
    public keyWords(): KeyWordsContext | null {
        return this.getRuleContext(0, KeyWordsContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public NCName(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NCName, 0);
    }
    public parenthesizedExpr(): ParenthesizedExprContext | null {
        return this.getRuleContext(0, ParenthesizedExprContext);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public contextItemExpr(): ContextItemExprContext | null {
        return this.getRuleContext(0, ContextItemExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_objectLookup;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterObjectLookup) {
             listener.enterObjectLookup(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitObjectLookup) {
             listener.exitObjectLookup(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitObjectLookup) {
            return visitor.visitObjectLookup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NullLiteral, 0);
    }
    public Ktrue(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktrue, 0);
    }
    public Kfalse(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kfalse, 0);
    }
    public Literal(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Literal, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public varRef(): VarRefContext | null {
        return this.getRuleContext(0, VarRefContext);
    }
    public parenthesizedExpr(): ParenthesizedExprContext | null {
        return this.getRuleContext(0, ParenthesizedExprContext);
    }
    public contextItemExpr(): ContextItemExprContext | null {
        return this.getRuleContext(0, ContextItemExprContext);
    }
    public objectConstructor(): ObjectConstructorContext | null {
        return this.getRuleContext(0, ObjectConstructorContext);
    }
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }
    public orderedExpr(): OrderedExprContext | null {
        return this.getRuleContext(0, OrderedExprContext);
    }
    public unorderedExpr(): UnorderedExprContext | null {
        return this.getRuleContext(0, UnorderedExprContext);
    }
    public arrayConstructor(): ArrayConstructorContext | null {
        return this.getRuleContext(0, ArrayConstructorContext);
    }
    public functionItemExpr(): FunctionItemExprContext | null {
        return this.getRuleContext(0, FunctionItemExprContext);
    }
    public blockExpr(): BlockExprContext | null {
        return this.getRuleContext(0, BlockExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_primaryExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterPrimaryExpr) {
             listener.enterPrimaryExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitPrimaryExpr) {
             listener.exitPrimaryExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public statementsAndExpr(): StatementsAndExprContext {
        return this.getRuleContext(0, StatementsAndExprContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_blockExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterBlockExpr) {
             listener.enterBlockExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitBlockExpr) {
             listener.exitBlockExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitBlockExpr) {
            return visitor.visitBlockExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarRefContext extends antlr.ParserRuleContext {
    public _var_name?: QnameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ReferenceSymbol(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.ReferenceSymbol, 0)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_varRef;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterVarRef) {
             listener.enterVarRef(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitVarRef) {
             listener.exitVarRef(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitVarRef) {
            return visitor.visitVarRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParenthesizedExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_parenthesizedExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterParenthesizedExpr) {
             listener.enterParenthesizedExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitParenthesizedExpr) {
             listener.exitParenthesizedExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpr) {
            return visitor.visitParenthesizedExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContextItemExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ReferenceContextSymbol(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.ReferenceContextSymbol, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_contextItemExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterContextItemExpr) {
             listener.enterContextItemExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitContextItemExpr) {
             listener.exitContextItemExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitContextItemExpr) {
            return visitor.visitContextItemExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderedExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_orderedExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterOrderedExpr) {
             listener.enterOrderedExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitOrderedExpr) {
             listener.exitOrderedExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitOrderedExpr) {
            return visitor.visitOrderedExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnorderedExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kunordered(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kunordered, 0)!;
    }
    public BraceOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceOpen, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public BraceClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BraceClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_unorderedExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterUnorderedExpr) {
             listener.enterUnorderedExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitUnorderedExpr) {
             listener.exitUnorderedExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitUnorderedExpr) {
            return visitor.visitUnorderedExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public _fn_name?: QnameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argumentList(): ArgumentListContext {
        return this.getRuleContext(0, ArgumentListContext)!;
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_functionCall;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public _argument?: ArgumentContext;
    public _args: ArgumentContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public argument(): ArgumentContext[];
    public argument(i: number): ArgumentContext | null;
    public argument(i?: number): ArgumentContext[] | ArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }

        return this.getRuleContext(i, ArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_argumentList;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArgumentList) {
             listener.enterArgumentList(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArgumentList) {
             listener.exitArgumentList(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprSingle(): ExprSingleContext | null {
        return this.getRuleContext(0, ExprSingleContext);
    }
    public ArgumentPlaceholder(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_argument;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArgument) {
             listener.enterArgument(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArgument) {
             listener.exitArgument(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionItemExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedFunctionRef(): NamedFunctionRefContext | null {
        return this.getRuleContext(0, NamedFunctionRefContext);
    }
    public inlineFunctionExpr(): InlineFunctionExprContext | null {
        return this.getRuleContext(0, InlineFunctionExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_functionItemExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFunctionItemExpr) {
             listener.enterFunctionItemExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFunctionItemExpr) {
             listener.exitFunctionItemExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFunctionItemExpr) {
            return visitor.visitFunctionItemExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedFunctionRefContext extends antlr.ParserRuleContext {
    public _fn_name?: QnameContext;
    public _arity?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qname(): QnameContext {
        return this.getRuleContext(0, QnameContext)!;
    }
    public Literal(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Literal, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_namedFunctionRef;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterNamedFunctionRef) {
             listener.enterNamedFunctionRef(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitNamedFunctionRef) {
             listener.exitNamedFunctionRef(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitNamedFunctionRef) {
            return visitor.visitNamedFunctionRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlineFunctionExprContext extends antlr.ParserRuleContext {
    public _return_type?: SequenceTypeContext;
    public _fn_body?: StatementsAndOptionalExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext {
        return this.getRuleContext(0, AnnotationsContext)!;
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public BraceOpen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceOpen, 0);
    }
    public BraceClose(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceClose, 0);
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public sequenceType(): SequenceTypeContext | null {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    public statementsAndOptionalExpr(): StatementsAndOptionalExprContext | null {
        return this.getRuleContext(0, StatementsAndOptionalExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_inlineFunctionExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterInlineFunctionExpr) {
             listener.enterInlineFunctionExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitInlineFunctionExpr) {
             listener.exitInlineFunctionExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitInlineFunctionExpr) {
            return visitor.visitInlineFunctionExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertExprContext extends antlr.ParserRuleContext {
    public _to_insert_expr?: ExprSingleContext;
    public _main_expr?: ExprSingleContext;
    public _pos_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kinsert(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kinsert, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public Kinto(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kinto, 0)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public Kat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kat, 0);
    }
    public Kposition(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kposition, 0);
    }
    public pairConstructor(): PairConstructorContext[];
    public pairConstructor(i: number): PairConstructorContext | null;
    public pairConstructor(i?: number): PairConstructorContext[] | PairConstructorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PairConstructorContext);
        }

        return this.getRuleContext(i, PairConstructorContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_insertExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterInsertExpr) {
             listener.enterInsertExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitInsertExpr) {
             listener.exitInsertExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitInsertExpr) {
            return visitor.visitInsertExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kdelete(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kdelete, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public updateLocator(): UpdateLocatorContext {
        return this.getRuleContext(0, UpdateLocatorContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_deleteExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterDeleteExpr) {
             listener.enterDeleteExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitDeleteExpr) {
             listener.exitDeleteExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitDeleteExpr) {
            return visitor.visitDeleteExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameExprContext extends antlr.ParserRuleContext {
    public _name_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Krename(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Krename, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public updateLocator(): UpdateLocatorContext {
        return this.getRuleContext(0, UpdateLocatorContext)!;
    }
    public Kas(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kas, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_renameExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterRenameExpr) {
             listener.enterRenameExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitRenameExpr) {
             listener.exitRenameExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitRenameExpr) {
            return visitor.visitRenameExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReplaceExprContext extends antlr.ParserRuleContext {
    public _replacer_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kreplace(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreplace, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public Kvalue(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kvalue, 0)!;
    }
    public Kof(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kof, 0)!;
    }
    public updateLocator(): UpdateLocatorContext {
        return this.getRuleContext(0, UpdateLocatorContext)!;
    }
    public Kwith(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kwith, 0)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_replaceExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterReplaceExpr) {
             listener.enterReplaceExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitReplaceExpr) {
             listener.exitReplaceExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitReplaceExpr) {
            return visitor.visitReplaceExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformExprContext extends antlr.ParserRuleContext {
    public _mod_expr?: ExprSingleContext;
    public _ret_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kcopy(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kcopy, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public copyDecl(): CopyDeclContext[];
    public copyDecl(i: number): CopyDeclContext | null;
    public copyDecl(i?: number): CopyDeclContext[] | CopyDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CopyDeclContext);
        }

        return this.getRuleContext(i, CopyDeclContext);
    }
    public Kmodify(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kmodify, 0)!;
    }
    public Kreturn(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kreturn, 0)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_transformExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTransformExpr) {
             listener.enterTransformExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTransformExpr) {
             listener.exitTransformExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTransformExpr) {
            return visitor.visitTransformExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AppendExprContext extends antlr.ParserRuleContext {
    public _to_append_expr?: ExprSingleContext;
    public _array_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kappend(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kappend, 0)!;
    }
    public Kjson(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kjson, 0)!;
    }
    public Kinto(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kinto, 0)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_appendExpr;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAppendExpr) {
             listener.enterAppendExpr(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAppendExpr) {
             listener.exitAppendExpr(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAppendExpr) {
            return visitor.visitAppendExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateLocatorContext extends antlr.ParserRuleContext {
    public _main_expr?: PrimaryExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpr(): PrimaryExprContext {
        return this.getRuleContext(0, PrimaryExprContext)!;
    }
    public arrayLookup(): ArrayLookupContext[];
    public arrayLookup(i: number): ArrayLookupContext | null;
    public arrayLookup(i?: number): ArrayLookupContext[] | ArrayLookupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrayLookupContext);
        }

        return this.getRuleContext(i, ArrayLookupContext);
    }
    public objectLookup(): ObjectLookupContext[];
    public objectLookup(i: number): ObjectLookupContext | null;
    public objectLookup(i?: number): ObjectLookupContext[] | ObjectLookupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectLookupContext);
        }

        return this.getRuleContext(i, ObjectLookupContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_updateLocator;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterUpdateLocator) {
             listener.enterUpdateLocator(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitUpdateLocator) {
             listener.exitUpdateLocator(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitUpdateLocator) {
            return visitor.visitUpdateLocator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CopyDeclContext extends antlr.ParserRuleContext {
    public _var_ref?: VarRefContext;
    public _src_expr?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varRef(): VarRefContext {
        return this.getRuleContext(0, VarRefContext)!;
    }
    public exprSingle(): ExprSingleContext {
        return this.getRuleContext(0, ExprSingleContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_copyDecl;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterCopyDecl) {
             listener.enterCopyDecl(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitCopyDecl) {
             listener.exitCopyDecl(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitCopyDecl) {
            return visitor.visitCopyDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SequenceTypeContext extends antlr.ParserRuleContext {
    public _item?: ItemTypeContext;
    public _s111?: Token | null;
    public _question: antlr.Token[] = [];
    public _s114?: Token | null;
    public _star: antlr.Token[] = [];
    public _s112?: Token | null;
    public _plus: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BracketOpen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BracketOpen, 0);
    }
    public BracketClose(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BracketClose, 0);
    }
    public itemType(): ItemTypeContext | null {
        return this.getRuleContext(0, ItemTypeContext);
    }
    public ArgumentPlaceholder(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    public Times(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Times, 0);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Plus, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_sequenceType;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSequenceType) {
             listener.enterSequenceType(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSequenceType) {
             listener.exitSequenceType(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSequenceType) {
            return visitor.visitSequenceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectConstructorContext extends antlr.ParserRuleContext {
    public _s122?: Token | null;
    public _merge_operator: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BraceOpen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceOpen, 0);
    }
    public BraceClose(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceClose, 0);
    }
    public pairConstructor(): PairConstructorContext[];
    public pairConstructor(i: number): PairConstructorContext | null;
    public pairConstructor(i?: number): PairConstructorContext[] | PairConstructorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PairConstructorContext);
        }

        return this.getRuleContext(i, PairConstructorContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public BraceOr(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.BraceOr, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_objectConstructor;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterObjectConstructor) {
             listener.enterObjectConstructor(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitObjectConstructor) {
             listener.exitObjectConstructor(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitObjectConstructor) {
            return visitor.visitObjectConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ItemTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qname(): QnameContext | null {
        return this.getRuleContext(0, QnameContext);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NullLiteral, 0);
    }
    public functionTest(): FunctionTestContext | null {
        return this.getRuleContext(0, FunctionTestContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_itemType;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterItemType) {
             listener.enterItemType(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitItemType) {
             listener.exitItemType(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitItemType) {
            return visitor.visitItemType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public anyFunctionTest(): AnyFunctionTestContext | null {
        return this.getRuleContext(0, AnyFunctionTestContext);
    }
    public typedFunctionTest(): TypedFunctionTestContext | null {
        return this.getRuleContext(0, TypedFunctionTestContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_functionTest;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterFunctionTest) {
             listener.enterFunctionTest(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitFunctionTest) {
             listener.exitFunctionTest(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitFunctionTest) {
            return visitor.visitFunctionTest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnyFunctionTestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public Times(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Times, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_anyFunctionTest;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterAnyFunctionTest) {
             listener.enterAnyFunctionTest(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitAnyFunctionTest) {
             listener.exitAnyFunctionTest(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitAnyFunctionTest) {
            return visitor.visitAnyFunctionTest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypedFunctionTestContext extends antlr.ParserRuleContext {
    public _sequenceType?: SequenceTypeContext;
    public _st: SequenceTypeContext[] = [];
    public _rt?: SequenceTypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketOpen, 0)!;
    }
    public BracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.BracketClose, 0)!;
    }
    public Kas(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.Kas, 0)!;
    }
    public sequenceType(): SequenceTypeContext[];
    public sequenceType(i: number): SequenceTypeContext | null;
    public sequenceType(i?: number): SequenceTypeContext[] | SequenceTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }

        return this.getRuleContext(i, SequenceTypeContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(jsoniqParser.Comma);
    	} else {
    		return this.getToken(jsoniqParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_typedFunctionTest;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterTypedFunctionTest) {
             listener.enterTypedFunctionTest(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitTypedFunctionTest) {
             listener.exitTypedFunctionTest(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitTypedFunctionTest) {
            return visitor.visitTypedFunctionTest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleTypeContext extends antlr.ParserRuleContext {
    public _item?: ItemTypeContext;
    public _s111?: Token | null;
    public _question: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public itemType(): ItemTypeContext {
        return this.getRuleContext(0, ItemTypeContext)!;
    }
    public ArgumentPlaceholder(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_singleType;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterSingleType) {
             listener.enterSingleType(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitSingleType) {
             listener.exitSingleType(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitSingleType) {
            return visitor.visitSingleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PairConstructorContext extends antlr.ParserRuleContext {
    public _lhs?: ExprSingleContext;
    public _name?: Token | null;
    public _rhs?: ExprSingleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ArgumentPlaceholder(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.ArgumentPlaceholder, 0)!;
    }
    public exprSingle(): ExprSingleContext[];
    public exprSingle(i: number): ExprSingleContext | null;
    public exprSingle(i?: number): ExprSingleContext[] | ExprSingleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }

        return this.getRuleContext(i, ExprSingleContext);
    }
    public NCName(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NCName, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_pairConstructor;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterPairConstructor) {
             listener.enterPairConstructor(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitPairConstructor) {
             listener.exitPairConstructor(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitPairConstructor) {
            return visitor.visitPairConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayConstructorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SquareBracketOpen(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketOpen, 0)!;
    }
    public SquareBracketClose(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.SquareBracketClose, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_arrayConstructor;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterArrayConstructor) {
             listener.enterArrayConstructor(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitArrayConstructor) {
             listener.exitArrayConstructor(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitArrayConstructor) {
            return visitor.visitArrayConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UriLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_uriLiteral;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterUriLiteral) {
             listener.enterUriLiteral(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitUriLiteral) {
             listener.exitUriLiteral(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitUriLiteral) {
            return visitor.visitUriLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(jsoniqParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_stringLiteral;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeyWordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Kjsoniq(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kjsoniq, 0);
    }
    public Kand(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kand, 0);
    }
    public Kcast(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcast, 0);
    }
    public Kcastable(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcastable, 0);
    }
    public Kcollation(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcollation, 0);
    }
    public Kcontext(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcontext, 0);
    }
    public Kdeclare(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    public Kdefault(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    public Kelse(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kelse, 0);
    }
    public Kgreatest(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kgreatest, 0);
    }
    public Kinstance(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kinstance, 0);
    }
    public Kstatically(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kstatically, 0);
    }
    public Kis(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kis, 0);
    }
    public Kitem(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kitem, 0);
    }
    public Kleast(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kleast, 0);
    }
    public Knot(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Knot, 0);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.NullLiteral, 0);
    }
    public Kof(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kof, 0);
    }
    public Kor(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kor, 0);
    }
    public Kthen(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kthen, 0);
    }
    public Kto(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kto, 0);
    }
    public Ktreat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktreat, 0);
    }
    public Ktypeswitch(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktypeswitch, 0);
    }
    public Kversion(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kversion, 0);
    }
    public Kswitch(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kswitch, 0);
    }
    public Kcase(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcase, 0);
    }
    public Ktry(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktry, 0);
    }
    public Kcatch(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcatch, 0);
    }
    public Ksome(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ksome, 0);
    }
    public Kevery(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kevery, 0);
    }
    public Ksatisfies(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ksatisfies, 0);
    }
    public Kstable(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kstable, 0);
    }
    public Kvariable(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kvariable, 0);
    }
    public Kascending(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kascending, 0);
    }
    public Kdescending(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdescending, 0);
    }
    public Kempty(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kempty, 0);
    }
    public Kallowing(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kallowing, 0);
    }
    public Kas(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    public Kat(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kat, 0);
    }
    public Kin(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kin, 0);
    }
    public Kif(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kif, 0);
    }
    public Kfor(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kfor, 0);
    }
    public Klet(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Klet, 0);
    }
    public Kwhere(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kwhere, 0);
    }
    public Kgroup(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kgroup, 0);
    }
    public Kby(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kby, 0);
    }
    public Korder(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Korder, 0);
    }
    public Kcount(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcount, 0);
    }
    public Kreturn(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    public Kunordered(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kunordered, 0);
    }
    public Ktrue(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktrue, 0);
    }
    public Kfalse(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kfalse, 0);
    }
    public Ktype(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Ktype, 0);
    }
    public Kinsert(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kinsert, 0);
    }
    public Kdelete(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kdelete, 0);
    }
    public Krename(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Krename, 0);
    }
    public Kreplace(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kreplace, 0);
    }
    public Kappend(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kappend, 0);
    }
    public Kcopy(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcopy, 0);
    }
    public Kmodify(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kmodify, 0);
    }
    public Kjson(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    public Kinto(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kinto, 0);
    }
    public Kvalue(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kvalue, 0);
    }
    public Kwith(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kwith, 0);
    }
    public Kposition(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kposition, 0);
    }
    public Kvalidate(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kvalidate, 0);
    }
    public Kannotate(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kannotate, 0);
    }
    public Kbreak(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kbreak, 0);
    }
    public Kloop(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kloop, 0);
    }
    public Kcontinue(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kcontinue, 0);
    }
    public Kexit(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kexit, 0);
    }
    public Kreturning(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kreturning, 0);
    }
    public Kwhile(): antlr.TerminalNode | null {
        return this.getToken(jsoniqParser.Kwhile, 0);
    }
    public override get ruleIndex(): number {
        return jsoniqParser.RULE_keyWords;
    }
    public override enterRule(listener: jsoniqListener): void {
        if(listener.enterKeyWords) {
             listener.enterKeyWords(this);
        }
    }
    public override exitRule(listener: jsoniqListener): void {
        if(listener.exitKeyWords) {
             listener.exitKeyWords(this);
        }
    }
    public override accept<Result>(visitor: jsoniqVisitor<Result>): Result | null {
        if (visitor.visitKeyWords) {
            return visitor.visitKeyWords(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
