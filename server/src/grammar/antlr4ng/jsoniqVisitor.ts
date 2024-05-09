// Generated from ./src/grammar/antlr4ng/jsoniq.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ModuleAndThisIsItContext } from "./jsoniqParser.js";
import { ModuleContext } from "./jsoniqParser.js";
import { MainModuleContext } from "./jsoniqParser.js";
import { LibraryModuleContext } from "./jsoniqParser.js";
import { PrologContext } from "./jsoniqParser.js";
import { ProgramContext } from "./jsoniqParser.js";
import { StatementsContext } from "./jsoniqParser.js";
import { StatementsAndExprContext } from "./jsoniqParser.js";
import { StatementsAndOptionalExprContext } from "./jsoniqParser.js";
import { StatementContext } from "./jsoniqParser.js";
import { ApplyStatementContext } from "./jsoniqParser.js";
import { AssignStatementContext } from "./jsoniqParser.js";
import { BlockStatementContext } from "./jsoniqParser.js";
import { BreakStatementContext } from "./jsoniqParser.js";
import { ContinueStatementContext } from "./jsoniqParser.js";
import { ExitStatementContext } from "./jsoniqParser.js";
import { FlowrStatementContext } from "./jsoniqParser.js";
import { IfStatementContext } from "./jsoniqParser.js";
import { SwitchStatementContext } from "./jsoniqParser.js";
import { SwitchCaseStatementContext } from "./jsoniqParser.js";
import { TryCatchStatementContext } from "./jsoniqParser.js";
import { CatchCaseStatementContext } from "./jsoniqParser.js";
import { TypeSwitchStatementContext } from "./jsoniqParser.js";
import { CaseStatementContext } from "./jsoniqParser.js";
import { AnnotationContext } from "./jsoniqParser.js";
import { AnnotationsContext } from "./jsoniqParser.js";
import { VarDeclStatementContext } from "./jsoniqParser.js";
import { VarDeclForStatementContext } from "./jsoniqParser.js";
import { WhileStatementContext } from "./jsoniqParser.js";
import { SetterContext } from "./jsoniqParser.js";
import { NamespaceDeclContext } from "./jsoniqParser.js";
import { AnnotatedDeclContext } from "./jsoniqParser.js";
import { DefaultCollationDeclContext } from "./jsoniqParser.js";
import { OrderingModeDeclContext } from "./jsoniqParser.js";
import { EmptyOrderDeclContext } from "./jsoniqParser.js";
import { DecimalFormatDeclContext } from "./jsoniqParser.js";
import { QnameContext } from "./jsoniqParser.js";
import { DfPropertyNameContext } from "./jsoniqParser.js";
import { ModuleImportContext } from "./jsoniqParser.js";
import { VarDeclContext } from "./jsoniqParser.js";
import { ContextItemDeclContext } from "./jsoniqParser.js";
import { FunctionDeclContext } from "./jsoniqParser.js";
import { TypeDeclContext } from "./jsoniqParser.js";
import { SchemaLanguageContext } from "./jsoniqParser.js";
import { ParamListContext } from "./jsoniqParser.js";
import { ParamContext } from "./jsoniqParser.js";
import { ExprContext } from "./jsoniqParser.js";
import { ExprSingleContext } from "./jsoniqParser.js";
import { ExprSimpleContext } from "./jsoniqParser.js";
import { FlowrExprContext } from "./jsoniqParser.js";
import { ForClauseContext } from "./jsoniqParser.js";
import { ForVarContext } from "./jsoniqParser.js";
import { LetClauseContext } from "./jsoniqParser.js";
import { LetVarContext } from "./jsoniqParser.js";
import { WhereClauseContext } from "./jsoniqParser.js";
import { GroupByClauseContext } from "./jsoniqParser.js";
import { GroupByVarContext } from "./jsoniqParser.js";
import { OrderByClauseContext } from "./jsoniqParser.js";
import { OrderByExprContext } from "./jsoniqParser.js";
import { CountClauseContext } from "./jsoniqParser.js";
import { QuantifiedExprContext } from "./jsoniqParser.js";
import { QuantifiedExprVarContext } from "./jsoniqParser.js";
import { SwitchExprContext } from "./jsoniqParser.js";
import { SwitchCaseClauseContext } from "./jsoniqParser.js";
import { TypeSwitchExprContext } from "./jsoniqParser.js";
import { CaseClauseContext } from "./jsoniqParser.js";
import { IfExprContext } from "./jsoniqParser.js";
import { TryCatchExprContext } from "./jsoniqParser.js";
import { CatchClauseContext } from "./jsoniqParser.js";
import { OrExprContext } from "./jsoniqParser.js";
import { AndExprContext } from "./jsoniqParser.js";
import { NotExprContext } from "./jsoniqParser.js";
import { ComparisonExprContext } from "./jsoniqParser.js";
import { StringConcatExprContext } from "./jsoniqParser.js";
import { RangeExprContext } from "./jsoniqParser.js";
import { AdditiveExprContext } from "./jsoniqParser.js";
import { MultiplicativeExprContext } from "./jsoniqParser.js";
import { InstanceOfExprContext } from "./jsoniqParser.js";
import { IsStaticallyExprContext } from "./jsoniqParser.js";
import { TreatExprContext } from "./jsoniqParser.js";
import { CastableExprContext } from "./jsoniqParser.js";
import { CastExprContext } from "./jsoniqParser.js";
import { ArrowExprContext } from "./jsoniqParser.js";
import { ArrowFunctionSpecifierContext } from "./jsoniqParser.js";
import { UnaryExprContext } from "./jsoniqParser.js";
import { ValueExprContext } from "./jsoniqParser.js";
import { ValidateExprContext } from "./jsoniqParser.js";
import { AnnotateExprContext } from "./jsoniqParser.js";
import { SimpleMapExprContext } from "./jsoniqParser.js";
import { PostFixExprContext } from "./jsoniqParser.js";
import { ArrayLookupContext } from "./jsoniqParser.js";
import { ArrayUnboxingContext } from "./jsoniqParser.js";
import { PredicateContext } from "./jsoniqParser.js";
import { ObjectLookupContext } from "./jsoniqParser.js";
import { PrimaryExprContext } from "./jsoniqParser.js";
import { BlockExprContext } from "./jsoniqParser.js";
import { VarRefContext } from "./jsoniqParser.js";
import { ParenthesizedExprContext } from "./jsoniqParser.js";
import { ContextItemExprContext } from "./jsoniqParser.js";
import { OrderedExprContext } from "./jsoniqParser.js";
import { UnorderedExprContext } from "./jsoniqParser.js";
import { FunctionCallContext } from "./jsoniqParser.js";
import { ArgumentListContext } from "./jsoniqParser.js";
import { ArgumentContext } from "./jsoniqParser.js";
import { FunctionItemExprContext } from "./jsoniqParser.js";
import { NamedFunctionRefContext } from "./jsoniqParser.js";
import { InlineFunctionExprContext } from "./jsoniqParser.js";
import { InsertExprContext } from "./jsoniqParser.js";
import { DeleteExprContext } from "./jsoniqParser.js";
import { RenameExprContext } from "./jsoniqParser.js";
import { ReplaceExprContext } from "./jsoniqParser.js";
import { TransformExprContext } from "./jsoniqParser.js";
import { AppendExprContext } from "./jsoniqParser.js";
import { UpdateLocatorContext } from "./jsoniqParser.js";
import { CopyDeclContext } from "./jsoniqParser.js";
import { SequenceTypeContext } from "./jsoniqParser.js";
import { ObjectConstructorContext } from "./jsoniqParser.js";
import { ItemTypeContext } from "./jsoniqParser.js";
import { FunctionTestContext } from "./jsoniqParser.js";
import { AnyFunctionTestContext } from "./jsoniqParser.js";
import { TypedFunctionTestContext } from "./jsoniqParser.js";
import { SingleTypeContext } from "./jsoniqParser.js";
import { PairConstructorContext } from "./jsoniqParser.js";
import { ArrayConstructorContext } from "./jsoniqParser.js";
import { UriLiteralContext } from "./jsoniqParser.js";
import { StringLiteralContext } from "./jsoniqParser.js";
import { KeyWordsContext } from "./jsoniqParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `jsoniqParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class jsoniqVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `jsoniqParser.moduleAndThisIsIt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleAndThisIsIt?: (ctx: ModuleAndThisIsItContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.module`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule?: (ctx: ModuleContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.mainModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMainModule?: (ctx: MainModuleContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.libraryModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibraryModule?: (ctx: LibraryModuleContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.prolog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProlog?: (ctx: PrologContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatements?: (ctx: StatementsContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.statementsAndExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementsAndExpr?: (ctx: StatementsAndExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.statementsAndOptionalExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementsAndOptionalExpr?: (ctx: StatementsAndOptionalExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.applyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApplyStatement?: (ctx: ApplyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.assignStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStatement?: (ctx: AssignStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.exitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExitStatement?: (ctx: ExitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.flowrStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlowrStatement?: (ctx: FlowrStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.switchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.switchCaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchCaseStatement?: (ctx: SwitchCaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.tryCatchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.catchCaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchCaseStatement?: (ctx: CatchCaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.typeSwitchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSwitchStatement?: (ctx: TypeSwitchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.caseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseStatement?: (ctx: CaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.annotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotation?: (ctx: AnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.annotations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotations?: (ctx: AnnotationsContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.varDeclStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDeclStatement?: (ctx: VarDeclStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.varDeclForStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDeclForStatement?: (ctx: VarDeclForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.setter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetter?: (ctx: SetterContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.namespaceDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceDecl?: (ctx: NamespaceDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.annotatedDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotatedDecl?: (ctx: AnnotatedDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.defaultCollationDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultCollationDecl?: (ctx: DefaultCollationDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.orderingModeDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderingModeDecl?: (ctx: OrderingModeDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.emptyOrderDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyOrderDecl?: (ctx: EmptyOrderDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.decimalFormatDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalFormatDecl?: (ctx: DecimalFormatDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.qname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQname?: (ctx: QnameContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.dfPropertyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfPropertyName?: (ctx: DfPropertyNameContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.moduleImport`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleImport?: (ctx: ModuleImportContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.varDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDecl?: (ctx: VarDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.contextItemDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContextItemDecl?: (ctx: ContextItemDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.functionDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.typeDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDecl?: (ctx: TypeDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.schemaLanguage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaLanguage?: (ctx: SchemaLanguageContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.exprSingle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprSingle?: (ctx: ExprSingleContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.exprSimple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprSimple?: (ctx: ExprSimpleContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.flowrExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlowrExpr?: (ctx: FlowrExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.forClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForClause?: (ctx: ForClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.forVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForVar?: (ctx: ForVarContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.letClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetClause?: (ctx: LetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.letVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetVar?: (ctx: LetVarContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.groupByVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByVar?: (ctx: GroupByVarContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.orderByExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByExpr?: (ctx: OrderByExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.countClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountClause?: (ctx: CountClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.quantifiedExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiedExpr?: (ctx: QuantifiedExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.quantifiedExprVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiedExprVar?: (ctx: QuantifiedExprVarContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.switchExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchExpr?: (ctx: SwitchExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.switchCaseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchCaseClause?: (ctx: SwitchCaseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.typeSwitchExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSwitchExpr?: (ctx: TypeSwitchExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.caseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseClause?: (ctx: CaseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.ifExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExpr?: (ctx: IfExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.tryCatchExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryCatchExpr?: (ctx: TryCatchExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.orExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrExpr?: (ctx: OrExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.andExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndExpr?: (ctx: AndExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.notExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpr?: (ctx: NotExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.comparisonExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.stringConcatExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringConcatExpr?: (ctx: StringConcatExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.rangeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangeExpr?: (ctx: RangeExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.additiveExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.multiplicativeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.instanceOfExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstanceOfExpr?: (ctx: InstanceOfExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.isStaticallyExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsStaticallyExpr?: (ctx: IsStaticallyExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.treatExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTreatExpr?: (ctx: TreatExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.castableExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastableExpr?: (ctx: CastableExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.castExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastExpr?: (ctx: CastExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.arrowExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrowExpr?: (ctx: ArrowExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.arrowFunctionSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrowFunctionSpecifier?: (ctx: ArrowFunctionSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpr?: (ctx: UnaryExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.valueExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpr?: (ctx: ValueExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.validateExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidateExpr?: (ctx: ValidateExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.annotateExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotateExpr?: (ctx: AnnotateExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.simpleMapExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleMapExpr?: (ctx: SimpleMapExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.postFixExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostFixExpr?: (ctx: PostFixExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.arrayLookup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayLookup?: (ctx: ArrayLookupContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.arrayUnboxing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayUnboxing?: (ctx: ArrayUnboxingContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.objectLookup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectLookup?: (ctx: ObjectLookupContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.blockExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockExpr?: (ctx: BlockExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.varRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarRef?: (ctx: VarRefContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.parenthesizedExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.contextItemExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContextItemExpr?: (ctx: ContextItemExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.orderedExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedExpr?: (ctx: OrderedExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.unorderedExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnorderedExpr?: (ctx: UnorderedExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.argumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentList?: (ctx: ArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument?: (ctx: ArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.functionItemExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionItemExpr?: (ctx: FunctionItemExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.namedFunctionRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedFunctionRef?: (ctx: NamedFunctionRefContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.inlineFunctionExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineFunctionExpr?: (ctx: InlineFunctionExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.insertExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertExpr?: (ctx: InsertExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.deleteExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteExpr?: (ctx: DeleteExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.renameExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameExpr?: (ctx: RenameExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.replaceExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceExpr?: (ctx: ReplaceExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.transformExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformExpr?: (ctx: TransformExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.appendExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAppendExpr?: (ctx: AppendExprContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.updateLocator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateLocator?: (ctx: UpdateLocatorContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.copyDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyDecl?: (ctx: CopyDeclContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.sequenceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequenceType?: (ctx: SequenceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.objectConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectConstructor?: (ctx: ObjectConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.itemType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitItemType?: (ctx: ItemTypeContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.functionTest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTest?: (ctx: FunctionTestContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.anyFunctionTest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyFunctionTest?: (ctx: AnyFunctionTestContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.typedFunctionTest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedFunctionTest?: (ctx: TypedFunctionTestContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.singleType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleType?: (ctx: SingleTypeContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.pairConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPairConstructor?: (ctx: PairConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.arrayConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.uriLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUriLiteral?: (ctx: UriLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.stringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `jsoniqParser.keyWords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyWords?: (ctx: KeyWordsContext) => Result;
}

